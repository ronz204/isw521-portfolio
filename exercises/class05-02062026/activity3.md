# Actividad #Tema 3 - Elementos de Bloque vs Línea

### 1. Para cada elemento: ① ¿bloque o en línea? ② ¿Semántico o presentacional? ③ ¿En qué situación real lo usarías?
- **R:**

**`<blockquote>`**
① Bloque · ② Semántico · ③ Para citar un párrafo o fragmento extenso de otra fuente: una cita de un libro, una frase de documentación oficial, un extracto de un RFC. Tiene peso semántico: los motores de búsqueda y lectores de pantalla saben que ese texto no es tuyo.

**`<span>`**
① Línea · ② Presentacional · ③ Cuando necesitás aplicar un estilo CSS o un atributo JS a una porción de texto sin agregar ningún significado. Es el `<div>` del mundo inline: último recurso cuando ninguna etiqueta semántica encaja.

**`<strong>`**
① Línea · ② Semántico · ③ Para texto que es importante, urgente o de alto impacto dentro de la oración. Un lector de pantalla lo anuncia con énfasis. Ejemplo: advertencias, términos clave en una explicación, datos críticos en una interfaz.

**`<article>`**
① Bloque · ② Semántico · ③ Para cualquier pieza de contenido autónoma: un post de blog, una tarjeta de producto, una noticia, un comentario de usuario. Si el contenido tiene sentido fuera del contexto de la página, va en `<article>`.

**`<b>`**
① Línea · ② Presentacional · ③ Negrita sin importancia semántica. Sirve para destacar visualmente un término técnico, un nombre de producto, o palabras clave en un resumen donde el énfasis es estético, no de urgencia.

**`<time>`**
① Línea · ② Semántico · ③ Para fechas y horas que deben ser legibles por máquinas. Ejemplo: `<time datetime="2026-06-03">3 de junio</time>`. Los crawlers de Google y los calendarios del sistema pueden parsear el atributo `datetime` y usar ese dato.

**`<ul>`**
① Bloque · ② Semántico · ③ Para listar ítems donde el orden no importa: características de un producto, tecnologías de un stack, opciones de un menú de navegación. Si el orden sí importa (pasos de un proceso, ranking), corresponde `<ol>`.

**`<mark>`**
① Línea · ② Semántico · ③ Para resaltar texto que es relevante en el contexto actual, no en general. El caso clásico: resultados de una búsqueda donde marcás las coincidencias del término buscado dentro del contenido. No es énfasis permanente, es relevancia contextual.

**`<code>`**
① Línea · ② Semántico · ③ Para fragmentos de código dentro de un párrafo de texto corrido. Ejemplo: "Para instalar las dependencias usá `<code>npm install</code>`". Para bloques de código de varias líneas, se combina con `<pre>`.

**`<section>`**
① Bloque · ② Semántico · ③ Para agrupaciones temáticas dentro de un contexto mayor. Necesita el contexto de la página para tener sentido: sección "Características" en una landing, sección "Precios", capítulo de documentación. A diferencia de `<article>`, fuera de la página pierde su razón de ser.