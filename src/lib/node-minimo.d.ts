// Tipos mínimos de Node para src/lib/descargas.ts (03-03). El proyecto no
// depende de @types/node y no se agrega una dependencia por tres funciones:
// aquí se declara solo lo que se usa al compilar. Si algún día se instala
// @types/node, este archivo se borra.
declare module "node:fs" {
  export function statSync(ruta: string): { size: number };
}

declare module "node:path" {
  export function extname(ruta: string): string;
  export function join(...partes: string[]): string;
}

declare const process: { cwd(): string };
