# Prompt Técnico de Refactorización Semántica HTML5

Copia el texto entre las líneas de asteriscos y utilízalo en la IA de tu elección
para procesar el archivo `v1_base_feria_innovacion.html`.

---

********************************************************************************

## SECCIÓN A — ROL Y CONTEXTO

Actúa como un Desarrollador Frontend Senior certificado en estándares W3C con
10 años de experiencia en HTML5 semántico y estructura de documentos web. Tu
objetivo es procesar un código HTML críticamente deficiente y transformarlo en
un documento moderno, accesible, seguro y completamente optimizado bajo los
estándares vigentes de la W3C.

---

## SECCIÓN B — DESCRIPCIÓN DEL PROBLEMA

El código proporcionado corresponde al sitio oficial de la **Feria Nacional de
Innovación Estudiantil**. Actualmente sufre del antipatrón **"Div-Soup"**
(abuso absoluto de contenedores `<div>`), carece de una jerarquía lógica de
encabezados, posee un formulario inaccesible, una tabla de agenda sin marcas
estructurales, un elemento multimedia desoptimizado que destruye las métricas
Core Web Vitals (CLS), un `<iframe>` de mapa propenso a vulnerabilidades de
seguridad y graves errores de anidamiento donde se colocaron elementos de bloque
dentro de elementos de línea (inline).

---

## SECCIÓN C — RESTRICCIONES TÉCNICAS EXPLÍCITAS

Debes reescribir el código cumpliendo estrictamente con las siguientes **9 reglas
de arquitectura web**:

1. **Estructura de Bloques Globales:** DEBES reemplazar todos los `<div>` que
   fungen como contenedores principales por las etiquetas semánticas HTML5
   correctas: `<header>` para el título inicial, `<nav>` para el menú de
   navegación, `<main>` para el cuerpo general, `<footer>` para el pie de
   página, `<section>` para delimitar los módulos principales identificados con
   IDs (`#inicio`, `#proyectos`, `#agenda`, `#inscripcion`, `#sede`) y
   `<article>` para las tarjetas independientes de los proyectos finalistas.

2. **Jerarquía de Encabezados:** Reorganiza secuencialmente las etiquetas `<h1>`
   a `<h6>`. No saltes niveles jerárquicos y asegura que reflejen la importancia
   lógica del documento.

3. **Accesibilidad en Formularios:** DEBES eliminar los `<div>` tipográficos y
   envolver los textos descriptivos en etiquetas `<label>`, vinculándolas
   obligatoriamente a sus respectivos campos mediante el uso explícito de
   atributos coincidentes `for` e `id`.

4. **Organización del Formulario:** DEBES agrupar los elementos interactivos del
   formulario mediante la etiqueta `<fieldset>` y rotularlos con `<legend>`,
   dividiéndolos en al menos dos grupos lógicos evidentes: **"Datos del equipo"**
   y **"Detalles del proyecto"**.

5. **Control de Selección Dinámica:** DEBES sustituir el menú cerrado `<select>`
   del campo "Carrera o programa académico" por un control híbrido
   `<input list="...">` acoplado a un elemento `<datalist>` que contenga todas
   las opciones originales, permitiendo autocompletado y texto libre.

6. **Estructura de Datos — Tablas:** DEBES inyectar los contenedores
   estructurales `<caption>` (con un título descriptivo), `<thead>` (para las
   cabeceras), `<tbody>` (para el cuerpo de datos) y `<tfoot>` (para la fila de
   totales) en la tabla de agenda. Además, DEBES aplicar el atributo `scope="col"`
   o `scope="row"` a absolutamente todos los elementos `<th>`.

7. **Optimización Multimedia — `<video>`:** DEBES añadir al elemento de video el
   atributo `poster` adjuntando una ruta de imagen válida (ej.
   `img/poster_feria.jpg`) para mitigar el Cumulative Layout Shift (CLS). También
   DEBES declarar el atributo `controls` y proveer al menos dos fuentes
   alternativas internas usando la etiqueta `<source>` con sus respectivos tipos
   (`video/mp4` y `video/webm`).

8. **Seguridad y Carga Eficiente — `<iframe>`:** DEBES blindar el mapa embebido
   agregando el atributo `loading="lazy"` para diferir su carga, un atributo
   `title=""` altamente descriptivo para lectores de pantalla y el atributo de
   aislamiento `sandbox="allow-scripts allow-same-origin"` para mitigar la
   inyección o ejecución de scripts arbitrarios en la raíz de la página.

9. **Corrección de Anidamiento del DOM:** DEBES erradicar de forma absoluta
   cualquier instancia donde se sitúen elementos de bloque (como `<div>`, `<p>`,
   `<h3>`) en el interior de elementos de línea (como `<span>` o `<a>`). Asegura
   que el modelo de contenido respete la especificación de flujo W3C.

---

## SECCIÓN D — CRITERIOS DE VALIDACIÓN

Antes de emitir tu respuesta, autoevalúa el código generado con el siguiente
checklist técnico. Si alguno de estos puntos falla, **corrige el código antes
de mostrarlo**:

- [ ] ¿Se eliminaron todos los `<div>` redundantes que estructuraban el layout?
- [ ] ¿Todos los campos de entrada tienen un `<label>` asociado por `id`?
- [ ] ¿El formulario está dividido por `<fieldset>` con `<legend>`?
- [ ] ¿La tabla cuenta con `<caption>`, `<thead>`, `<tbody>`, `<tfoot>` y todos
      los `<th>` declaran su `scope`?
- [ ] ¿El `<video>` cuenta con `poster`, `controls` y formatos `mp4`/`webm`
      simultáneos?
- [ ] ¿El `<iframe>` mitiga riesgos con `sandbox`, carga diferida `lazy` y
      atributo `title` accesible?
- [ ] ¿Se eliminaron los elementos de bloque anidados dentro de `<span>` y `<a>`?

---

## SECCIÓN E — FORMATO DEL RESULTADO

Entrega **única y exclusivamente** el bloque de código HTML5 completo y
refactorizado dentro de un único bloque de código Markdown. No agregues
introducciones, preámbulos, notas aclaratorias ni explicaciones posteriores. El
código debe estar limpio, perfectamente indentado y listo para ser guardado
directamente en un archivo con extensión `.html`.

Aquí está el código fuente deficiente que debes transformar:

[PEGA AQUÍ EL CÓDIGO COMPLETO DE v1_base_feria_innovacion.html]

********************************************************************************