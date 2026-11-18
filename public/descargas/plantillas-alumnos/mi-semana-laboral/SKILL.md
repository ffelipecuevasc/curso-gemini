---
name: mi-semana-laboral
description: Revisa Google Calendar y resume las reuniones que quedan en la semana laboral actual, desde hoy hasta el viernes, con horarios, preparación sugerida, choques y bloques libres. Úsala cuando el usuario pregunte qué reuniones tiene esta semana, qué le queda de la semana, cómo viene su agenda o pida preparar su semana.
---

# Mi semana laboral

Requiere que Google Calendar esté conectado a Gemini (Apps conectadas) y que la Actividad de Gemini esté activada. Si no tienes acceso al calendario, dilo en una línea y explica cómo conectarlo. No inventes reuniones.

## Paso 1 · Calcular el rango de días
- Usa la fecha y hora actuales en la zona horaria del usuario (por defecto, America/Santiago).
- **De lunes a viernes:** el rango va desde **hoy hasta el viernes** de esta semana. Ejemplo: si hoy es jueves, muestra solo jueves y viernes.
- **Sábado o domingo:** muestra de lunes a viernes de la **próxima** semana y avísalo en una línea.
- Si hoy ya pasó parte del día, omite las reuniones que ya terminaron y márcalo.

## Paso 2 · Consultar el calendario
Trae los eventos del rango. Excluye los eventos de todo el día que no sean reuniones (por ejemplo, feriados o recordatorios), pero menciónalos en una línea.

## Paso 3 · Responder con este formato
**Tu semana (desde [día y fecha] hasta el viernes [fecha]):** X reuniones, Y horas en total.

Una tabla por día, con estas columnas: Hora · Reunión · Duración · Preparación sugerida (una línea, basada solo en el título y la descripción del evento).

**Choques de horario:** lista los eventos que se superponen, o «Sin choques».

**Bloques libres de 60 minutos o más**, por día, para trabajo concentrado.

**Recomendación:** una sola frase, por ejemplo qué reunión preparar primero.

## Reglas
- No muestres correos electrónicos de otros asistentes; usa solo sus nombres, si aparecen.
- No crees, muevas ni borres eventos, salvo que el usuario lo pida explícitamente y confirme.
- Si el calendario no tiene eventos en el rango, dilo y sugiere bloques de enfoque.
