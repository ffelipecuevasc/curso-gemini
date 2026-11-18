# Dataset ficticio · Solicitudes de soporte GTD · T3 2026

**DATOS FICTICIOS — material de capacitación.** No corresponden a clientes ni a operaciones reales de GTD. Se generaron con un script para el curso «Gemini & Google Suite en el Entorno Laboral».

- Archivo: `dataset-ficticio-solicitudes-gtd-t3-2026.csv` (UTF-8, separado por comas)
- Filas: 260 solicitudes, entre el 1 de julio y el 30 de septiembre de 2026
- Uso: Unidad 2 (análisis, planilla, infografía, presentación y dashboard). Opcionalmente, como fuente de la Unidad 3.

## Columnas

| Columna | Tipo | Valores / descripción |
|---|---|---|
| `id_solicitud` | texto | Identificador (`SOL-0001`…) |
| `fecha` | fecha ISO | AAAA-MM-DD |
| `mes` | texto | Julio, Agosto, Septiembre |
| `region` | texto | Metropolitana, Valparaíso, Biobío, La Araucanía, Los Ríos, Los Lagos, Aysén |
| `tipo_servicio` | texto | Fibra Hogar, Móvil, TV, Empresas |
| `categoria` | texto | Falla técnica, Facturación, Instalación, Cambio de plan, Consulta comercial |
| `canal` | texto | WhatsApp, Teléfono, Sucursal virtual, Chat web, Presencial |
| `prioridad` | texto | Alta, Media, Baja |
| `tiempo_resolucion_horas` | número | Horas hasta la resolución (punto como separador decimal en el CSV) |
| `resuelto_primer_contacto` | texto | Sí / No |
| `nps` | entero | 0 a 10 |
| `estado` | texto | Cerrada, En curso, Escalada |
