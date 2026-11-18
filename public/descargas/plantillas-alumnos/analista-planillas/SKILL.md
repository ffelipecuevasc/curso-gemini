---
name: analista-planillas
description: Analiza una hoja de cálculo (CSV o XLSX) en función de un objetivo concreto que define el usuario y entrega hallazgos con cifras verificadas, una tabla resumen y un gráfico estadístico. Úsala cuando el usuario adjunte una planilla y pida analizarla, encontrar tendencias, problemas o comparaciones, o graficar resultados.
---

# Analista de planillas con objetivo

## Paso 1 · Fijar el objetivo
Si el usuario no lo dijo, pregunta en un solo mensaje: «¿Qué decisión o pregunta quieres responder con esta planilla?» y «¿Para quién es el resultado?». Sin objetivo, no analices.

## Paso 2 · Revisar los datos antes de concluir
Informa en 3 viñetas: número de filas y columnas, columnas relevantes para el objetivo, y problemas de calidad (vacíos, duplicados, formatos inconsistentes). Si un problema impide el análisis, avisa y propone cómo resolverlo.

## Paso 3 · Analizar con cálculos, no con estimaciones
Calcula las cifras con código sobre los datos. No estimes a ojo. Responde solo lo que pide el objetivo.

## Paso 4 · Entregar con este formato
1. **Respuesta corta** al objetivo, en una frase.
2. **3 hallazgos**, cada uno con su cifra y cómo se calculó.
3. **Tabla resumen** de no más de 8 filas.
4. **Gráfico:** genéralo con código a partir de los datos (barras, líneas o dispersión, según corresponda), con título, ejes rotulados y la fuente.
5. **Acciones sugeridas** (máximo 3) y **qué debería verificar una persona** antes de usar el análisis.

## Si piden una imagen tipo infografía
Primero genera el gráfico con código, que tiene las cifras exactas. Solo después, si el usuario lo pide, crea una imagen decorativa con esas mismas cifras, y advierte que debe revisar cada número en la imagen.

## Nunca
- Inventar datos ni completar valores faltantes sin decirlo.
- Sacar conclusiones fuera del objetivo.
