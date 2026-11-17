# .claude · Permisos y protecciones de Claude Code

Esta carpeta define qué puede hacer Claude Code en el repositorio sin preguntar, qué debe consultar antes, qué tiene prohibido y qué bloquean los hooks. Este README explica cada grupo de reglas y por qué existe. Ningún agente edita esta carpeta: la mantiene el desarrollador.

---

## 1. Qué hay en esta carpeta

| Archivo | Para qué sirve |
| :------ | :------------- |
| `settings.json` | Permisos (`allow`, `ask`, `deny`) y registro de los hooks. |
| `README.md` | Esta explicación. |
| `commands/` | Atajos de Claude Code (sección 7). Remiten a los flujos de `_planificacion/README.md`, que siguen todos los agentes. |
| `hooks/proteger-secretos.sh` | Bloquea la lectura, búsqueda y edición de archivos con secretos. |
| `hooks/restringir-documentos.sh` | Bloquea la creación de archivos `.md` que no están en la lista de documentos permitidos. |
| `hooks/documentos-permitidos.md` | Lista cerrada de documentos: la usan el hook, `settings.json` y `AGENTS.md`. |

## 2. Cómo se resuelven las reglas

- Claude Code evalúa primero `deny`, luego `ask` y al final `allow`. La primera lista que calza decide, sin importar qué regla es más específica: una regla de `allow` nunca abre una excepción dentro de una de `ask` o `deny`.
- Lo que no calza con ninguna regla queda en el comportamiento del modo de permisos activo (en el modo por defecto, Claude Code pregunta).
- Las rutas que empiezan con `/` se leen desde la raíz del proyecto; `*` cubre un nivel de carpeta y `**` cualquier profundidad. `Bash(comando *)` calza con el comando y cualquier argumento.
- Los hooks se ejecutan **antes** de los permisos y su bloqueo vale incluso en los modos que aprueban todo.
- `settings.local.json`, si existe, es personal: no se versiona y no debe usarse para relajar las reglas de `deny`.
- Si en la carpeta del proyecto o más arriba existe un `CLAUDE.md` o un `CLAUDE.local.md`, Claude Code lee ese archivo y deja de cargar `AGENTS.md`. Quien necesite instrucciones personales debe empezar su `CLAUDE.local.md` con la línea `@AGENTS.md`.

## 3. `allow` · Sin consulta

| Grupo | Reglas | Por qué |
| :---- | :----- | :------ |
| Comandos del proyecto (Astro) | `Bash(pnpm install)`, `Bash(pnpm dev)`, `Bash(pnpm run dev)`, `Bash(pnpm build)`, `Bash(pnpm run build)`, `Bash(pnpm test)`, `Bash(pnpm run test)`, `Bash(pnpm test *)`, `Bash(pnpm format)`, `Bash(pnpm run format)`, `Bash(pnpm format:check)`, `Bash(pnpm run format:check)`, `Bash(pnpm lint)`, `Bash(pnpm run lint)`, `Bash(pnpm list *)`, `Bash(pnpm outdated)`, `Bash(pnpm --version)`, `Bash(node --version)`, `Bash(pnpm preview)`, `Bash(pnpm run preview)`, `Bash(pnpm check)`, `Bash(pnpm run check)`, `Bash(pnpm astro check)`, `Bash(pnpm astro check *)` | Comandos de desarrollo, compilación, revisión, formato y pruebas de cada iteración; no cambian dependencias. |
| Git | `Bash(git status)`, `Bash(git status *)`, `Bash(git diff)`, `Bash(git diff *)`, `Bash(git log *)`, `Bash(git show *)`, `Bash(git blame *)` | Leer el estado y el historial es necesario para entender el código y no cambia nada. |
| Sistema y servicios | `Bash(ls *)` | Listar carpetas no modifica el repositorio. |
| Edición (Astro) | `Edit(/src/**)`, `Edit(/public/**)` | `src/` y `public/` son las carpetas de trabajo del sitio. |
| Edición (documentos de planificación) | `Edit(/_planificacion/00_producto/producto.md)`, `Edit(/_planificacion/00_producto/registro-pendientes.md)`, `Edit(/_planificacion/00_producto/registro-archivo.md)`, `Edit(/_planificacion/00_producto/decisiones.md)`, `Edit(/_planificacion/00_producto/propuestas-documentos-protegidos.md)`, `Edit(/_planificacion/10_epicas/epica-*/definicion-epica-*.md)`, `Edit(/_planificacion/10_epicas/epica-*/iteracion-*.md)`, `Edit(/_planificacion/10_epicas/epica-*/bitacoras/bitacora-*.md)` | Solo los documentos vivos de `hooks/documentos-permitidos.md`. Un archivo con otro nombre no se crea en silencio: Claude Code pregunta, y además el hook `restringir-documentos.sh` lo bloquea. |
| Web (Astro) | `WebFetch(domain:docs.astro.build)`, `WebFetch(domain:tailwindcss.com)`, `WebFetch(domain:developer.mozilla.org)` | Documentación oficial del stack, de solo lectura. |

## 4. `ask` · Requiere consulta

| Grupo | Reglas | Por qué |
| :---- | :----- | :------ |
| Comandos del proyecto (Astro) | `Bash(pnpm add *)`, `Bash(pnpm remove *)`, `Bash(pnpm update *)`, `Bash(pnpm up *)`, `Bash(pnpm dlx *)`, `Bash(pnpm approve-builds *)`, `Bash(npx *)` | Agregar, quitar o actualizar dependencias cambia el archivo de bloqueo y el peso del sitio; `pnpm dlx` y `npx` ejecutan paquetes descargados en el momento. |
| Git | `Bash(git branch)`, `Bash(git branch *)`, `Bash(git checkout *)`, `Bash(git switch *)`, `Bash(git stash *)`, `Bash(git add *)`, `Bash(git restore *)`, `Bash(git fetch *)` | Crear o cambiar de rama, preparar cambios o descartarlos los aprueba el desarrollador: las ramas siguen la convención del proyecto y `checkout` o `restore` pueden perder trabajo sin guardar. |
| Sistema y servicios | `Bash(rm *)`, `Bash(mv *)` | Mover o borrar archivos requiere aprobación porque puede romper referencias o perder trabajo. |
| Edición | `Edit(/.gitignore)`, `Edit(/.gitattributes)`, `Edit(/.env.example)` | `.gitignore`, `.gitattributes` y `.env.example` se versionan y afectan a todo el equipo. `.env.example` no lleva secretos reales, por eso se puede leer y editar con consulta. |
| Edición (Astro) | `Edit(/package.json)`, `Edit(/pnpm-workspace.yaml)`, `Edit(/tsconfig.json)`, `Edit(/.nvmrc)`, `Edit(/.prettierrc.json)`, `Edit(/astro.config.*)` | Archivos de configuración: un error en ellos rompe la compilación o el despliegue. |

## 5. `deny` · Prohibido

| Grupo | Reglas | Por qué |
| :---- | :----- | :------ |
| Comandos del proyecto (Astro) | `Bash(npm install *)`, `Bash(npm publish *)`, `Bash(yarn *)`, `Bash(pnpm publish *)`, `Bash(pnpm dlx wrangler *)`, `Bash(pnpm dlx vercel *)`, `Bash(pnpm dlx netlify-cli *)`, `Bash(npx wrangler *)`, `Bash(npx vercel *)`, `Bash(npx netlify-cli *)` | El único gestor es PNPM: `npm` y `yarn` generan otro archivo de bloqueo. Publicar paquetes y las CLI de hosting (también vía `pnpm dlx` o `npx`) quedan fuera del alcance del agente. |
| Git | `Bash(git commit)`, `Bash(git commit *)`, `Bash(git push)`, `Bash(git push *)`, `Bash(git merge)`, `Bash(git merge *)`, `Bash(git pull)`, `Bash(git pull *)`, `Bash(git rebase *)`, `Bash(git cherry-pick *)`, `Bash(git revert *)`, `Bash(git reset *)`, `Bash(git tag *)`, `Bash(git clean *)`, `Bash(git remote *)`, `Bash(git config *)`, `Bash(git apply *)`, `Bash(git update-index *)`, `Bash(git filter-branch *)`, `Bash(git filter-repo *)`, `Bash(git branch -d *)`, `Bash(git branch -D *)`, `Bash(git branch --delete *)`, `Bash(git -C *)`, `Bash(gh pr merge *)`, `Bash(gh repo *)`, `Bash(gh release *)`, `PowerShell(git commit *)`, `PowerShell(git push *)`, `PowerShell(git merge *)`, `PowerShell(git pull *)`, `PowerShell(git rebase *)`, `PowerShell(git cherry-pick *)`, `PowerShell(git revert *)`, `PowerShell(git reset *)`, `PowerShell(git tag *)`, `PowerShell(git clean *)`, `PowerShell(git apply *)`, `PowerShell(git filter-branch *)`, `PowerShell(git filter-repo *)` | Publicar, fusionar, etiquetar o reescribir el historial lo hace solo el desarrollador. Las reglas con `PowerShell(...)` repiten las de Git porque en Windows Claude Code puede usar PowerShell en vez de Bash. `git -C` se bloquea porque permite ejecutar Git en otra carpeta y saltarse estas reglas; `gh` repite las mismas operaciones desde la CLI de GitHub. |
| Sistema y servicios | `Bash(sudo *)`, `Bash(rm -rf *)`, `Bash(wrangler *)`, `Bash(vercel *)`, `Bash(netlify *)`, `Bash(railway *)`, `Bash(flyctl *)`, `Bash(heroku *)`, `Bash(gcloud *)`, `Bash(aws *)`, `Bash(az *)`, `Bash(docker push *)`, `Bash(kubectl *)` | `sudo`, el borrado recursivo y las herramientas de hosting y nube tocan el sistema o producción: el agente nunca despliega. |
| Edición | `Edit(/AGENTS.md)`, `Edit(/DESIGN.md)`, `Edit(/README.md)`, `Edit(/CLAUDE.md)`, `Edit(/CLAUDE.local.md)`, `Edit(/_planificacion/README.md)`, `Edit(/_planificacion/plantillas/**)`, `Edit(/.claude/**)`, `Edit(/.git/**)`, `Edit(**/.env)`, `Edit(**/.env.local)`, `Edit(**/.env.*.local)`, `Edit(**/.env.development)`, `Edit(**/.env.production)`, `Edit(**/.env.staging)`, `Edit(**/.env.test)`, `Edit(**/.dev.vars)` | Los documentos protegidos, las plantillas internas, `.claude/` y `.git/` los mantiene el desarrollador. `CLAUDE.md` y `CLAUDE.local.md` no se crean porque harían que Claude Code dejara de leer `AGENTS.md`. Los archivos de secretos (`.env` y sus variantes, `.dev.vars`) nunca se editan. |
| Lectura | `Read(**/.env)`, `Read(**/.env.local)`, `Read(**/.env.*.local)`, `Read(**/.env.development)`, `Read(**/.env.production)`, `Read(**/.env.staging)`, `Read(**/.env.test)`, `Read(**/.dev.vars)`, `Read(**/*.pem)`, `Read(**/id_rsa*)`, `Read(**/id_ed25519*)` | Los archivos de secretos y las llaves privadas no se leen. Se enumeran las variantes de `.env` en vez de usar `.env.*` para que `.env.example`, que se versiona sin secretos, siga legible. El hook `proteger-secretos.sh` cubre el resto de las variantes. |

## 6. Hooks

Los dos hooks son scripts de shell POSIX sin dependencias. Corren con `sh` en macOS y Linux, y con Git Bash en Windows (Git para Windows lo instala y Claude Code lo usa para ejecutar los hooks). Responden con código 2 para bloquear, y el motivo le llega al agente; con código 0 no objetan nada. **Fallan cerrados:** si algo inesperado ocurre dentro del script, bloquean la acción.

| Hook | Qué revisa | Qué bloquea |
| :--- | :--------- | :---------- |
| `proteger-secretos.sh` | Herramientas de lectura, edición y búsqueda, y comandos de Bash o PowerShell | Cualquier acceso a `.env` y sus variantes, `.dev.vars`, llaves privadas, certificados y archivos de credenciales. `.env.example`, `.env.sample`, `.env.template` y `.env.dist` se pueden leer porque se versionan sin secretos. |
| `restringir-documentos.sh` | La herramienta de escritura y los comandos que escriben archivos | La **creación** de un `.md` en las zonas de documentación que no calza con ningún patrón de `documentos-permitidos.md`. Editar un archivo que ya existe siempre se permite. |

**Prueba rápida** desde la raíz del repositorio (en Windows, desde Git Bash). La primera debe responder `2` y la segunda `0`:

```bash
printf '%s' '{"tool_name":"Read","tool_input":{"file_path":".env"}}' | sh .claude/hooks/proteger-secretos.sh; echo $?
printf '%s' '{"tool_name":"Read","tool_input":{"file_path":".env.example"}}' | sh .claude/hooks/proteger-secretos.sh; echo $?
```

**Aprobar un documento nuevo:** agrega su patrón a `hooks/documentos-permitidos.md` y a la tabla «Documentos permitidos» de `AGENTS.md`. Si el documento vive en `_planificacion/` y quieres que el agente lo edite sin consulta, agrega también su regla `Edit(...)` en `allow`.

## 7. Comandos

| Comando | Qué hace | Flujo completo |
| :------ | :------- | :------------- |
| `/siguiente-epica [XX]` | Cierra la épica con su bitácora de cierre, revisa como experto en el stack y propone las iteraciones de la siguiente. | `_planificacion/README.md`, sección 4.4 |
| `/iteracion XX-YY` | Ejecuta una iteración completa: preparada, implementación, verificación medida, bitácora y registro. | `AGENTS.md`, «Flujo de trabajo por iteración» |

## 8. Límites de la protección

- **Las reglas `Read` y `Edit` solo gobiernan las herramientas de archivos de Claude Code.** No cubren un programa que abre el archivo por dentro (un script de Python, un servidor de desarrollo que carga `.env`). El hook revisa el texto de los comandos, pero no puede ver qué hace un programa al ejecutarse.
- **Búsquedas recursivas.** Un `grep -r` desde la raíz puede recorrer `.env` sin nombrarlo. Por eso `.env` y sus variantes deben estar en `.gitignore`: la herramienta de búsqueda de Claude Code respeta ese archivo, y el agente excluye los secretos en sus búsquedas.
- **Sin shell, sin hooks.** Si la máquina no tiene `sh` ni Git Bash, los hooks no se ejecutan y solo quedan los permisos de `settings.json`. Con Git para Windows instalado, que el flujo de trabajo ya exige, esto no ocurre.
- **Sin sandbox en Windows nativo.** El sandbox de Claude Code, que limitaría a nivel de sistema los archivos que leen los comandos, no existe en Windows nativo: ahí las barreras son los permisos, los hooks y la revisión del desarrollador.
- **Otros agentes.** Codex, Antigravity u otros no leen esta carpeta. Para ellos valen las reglas de `AGENTS.md`, y el comando `/auditar-epica` detecta después los documentos que no debieran existir.
