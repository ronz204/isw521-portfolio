# Reporte Técnico de Auditoría — Fase 1

**Estudiante:** Roney Ruiz Rojas  
**Institución:** Universidad Técnica Nacional — Sede San Carlos  
**Curso:** ISW-521 Programación en Ambiente Web I  
**Profesor:** Bryan Miguel Chaves Salas  
**Archivo auditado:** `v1_base_feria_innovacion.html`  
**Fecha:** Junio 2025  

---

## 1. Análisis del problema "Div-Soup"

### Etiquetas semánticas ausentes

El archivo no usa ninguna etiqueta estructural de HTML5. Las siguientes están completamente ausentes: `<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`, `<article>` y `<aside>`. En su lugar, toda la estructura se construye con `<div>` y clases CSS arbitrarias:

```html
<div class="encabezado">...</div>
<div class="menu">...</div>
<div class="contenido">...</div>
<div class="pie">...</div>
```

### Impacto técnico

- **SEO:** Los motores de búsqueda no pueden distinguir el contenido principal del periférico. Sin landmarks como `<nav>` o `<main>`, el crawler indexa la página como un bloque homogéneo sin jerarquía.
- **Mantenimiento:** Un desarrollador nuevo tiene que leer el CSS para entender la arquitectura del layout. No es posible usar selectores semánticos nativos y cualquier cambio estructural implica rastrear clases manualmente.
- **Accesibilidad:** Los lectores de pantalla no tienen puntos de salto estructurales, por lo que los usuarios con discapacidad visual están obligados a recorrer el sitio de forma completamente lineal.

---

## 2. Análisis del Formulario de Inscripción

### Ausencia de `<label>` vinculados

El formulario usa `<div>` de texto plano como indicadores de campo, sin ningún `for` ni `id`:

```html
<div>Nombre del equipo o proyecto:</div>
<input type="text" placeholder="Nombre oficial del proyecto">
```

Esto reduce el área activa de clic en móviles y rompe la asociación que necesitan los lectores de pantalla para identificar cada campo.

### Falta de `<fieldset>` y `<legend>`

Los datos del equipo y del proyecto conviven en el mismo nivel sin ninguna agrupación lógica. Deberían separarse en al menos dos grupos usando `<fieldset>` con su respectivo `<legend>`: uno para datos del equipo (nombre, responsable, correo, teléfono, institución) y otro para detalles del proyecto (carrera, categoría, descripción, requerimientos).

### `<select>` en lugar de `<datalist>`

El campo de carrera usa un `<select>` cerrado que ya incluye una opción "Otra", lo que evidencia que la lista no es suficiente:

```html
<div>Carrera o programa académico:</div>
<select>...</select>
```

Un `<input list="...">` vinculado a un `<datalist>` sería más adecuado porque permite al usuario escribir libremente y recibir sugerencias al mismo tiempo, sin restringir la entrada a opciones fijas.

---

## 3. Análisis de la Tabla de Agenda

### Ausencia de secciones estructurales

La tabla no tiene `<thead>`, `<tbody>`, `<tfoot>` ni `<caption>`. Todos los `<tr>` están directamente bajo el `<table>`:

```html
<table>
    <tr>
        <th>Hora</th>
        ...
```

Estas secciones no son decorativas. `<thead>` permite repetir encabezados al imprimir y ayuda a los lectores de pantalla a anunciarlos al navegar celda por celda. `<tbody>` habilita scroll independiente y manipulación con JavaScript. `<tfoot>` ubica la fila de totales en la posición semántica correcta; sin él, la fila de "Total horas" es indistinguible de cualquier otra fila de datos.

### Atributo `scope` ausente en `<th>`

Ningún `<th>` declara su dirección. Los encabezados de columna deben tener `scope="col"` para que los lectores de pantalla puedan asociar correctamente cada celda con su encabezado correspondiente.

### Ausencia de `<caption>`

La tabla no tiene título propio. El `<caption>` es parte estructural de la tabla y los lectores de pantalla lo anuncian antes de que el usuario entre a navegar, además de identificarla correctamente en impresión si aparece separada del contexto visual.

---

## 4. Análisis del Elemento `<video>`

### Código con problemas

```html
<video width="100%">
    <source src="video/feria_presentacion.mp4" type="video/mp4">
</video>
```

### Problemas encontrados

- **Sin `poster`:** El elemento muestra un rectángulo negro hasta que el video carga, lo que provoca un Cumulative Layout Shift (CLS) que penaliza las métricas Core Web Vitals y afecta el posicionamiento orgánico.
- **Sin `controls`:** El usuario no tiene ninguna interfaz para reproducir, pausar o ajustar el volumen. El video existe en la página pero es completamente ininteractuable.
- **Fuente única en MP4:** Si el navegador del usuario no soporta ese formato, el video no carga sin ningún mensaje de error útil. Se debe incluir al menos una fuente alternativa en formato WebM (`video/webm`).

---

## 5. Análisis del `<iframe>` del Mapa

### Código con problemas

```html
<iframe
    src="https://www.google.com/maps/embed?pb=..."
    width="100%" height="420"
    style="border:0;" allowfullscreen="">
</iframe>
```

### Problemas encontrados

- **Sin `loading="lazy"`:** El mapa carga al abrir la página aunque esté al final del documento. Esto consume ancho de banda innecesario y retrasa la carga inicial para usuarios que nunca llegan a ver el mapa.
- **Sin `sandbox`:** El contenido embebido hereda los mismos permisos que la página padre, lo que permite ejecutar scripts, abrir ventanas y acceder al almacenamiento local. Con `sandbox="allow-scripts allow-same-origin"` se restringe al mínimo necesario.
- **Sin `title`:** Los lectores de pantalla anuncian el elemento solo como "frame" sin ninguna descripción. El atributo `title` identifica el propósito del contenido embebido.

---

## 6. Análisis del Anidamiento Incorrecto

Se encontraron dos violaciones al modelo de contenido HTML5 en la sección de contacto.

### Caso 1 — Elementos de bloque dentro de `<span>`

```html
<span>
    <div>
        <h3>Secretaría de la Feria</h3>
        <div>feria.innovacion@itcr.ac.cr</div>
        <div>Teléfono: 2550-9000 ext. 3100</div>
    </div>
</span>
```

El `<span>` es un elemento de línea y no puede contener elementos de bloque como `<div>` o `<h3>`. Esto viola la especificación W3C.

### Caso 2 — Elementos de bloque dentro de `<a>`

```html
<a href="https://www.tec.ac.cr">
    <div>
        <div>Portal oficial del ITCR</div>
        <div>www.tec.ac.cr · Campus Cartago</div>
    </div>
</a>
```

HTML5 permite contenido de flujo dentro de `<a>` en ciertos contextos, pero anidar `<div>` dentro de un ancla para simular tarjetas clicables genera comportamiento impredecible según el contexto donde aparezca.

### Por qué el navegador lo "corrige" y por qué eso es un problema

Los navegadores implementan algoritmos de recuperación de errores definidos en la especificación HTML5. Cuando detectan anidamiento inválido, mueven automáticamente los elementos de bloque fuera del elemento de línea. El problema es que cada navegador puede construir un árbol DOM distinto para el mismo HTML inválido, lo que hace que el CSS funcione diferente en Chrome, Firefox y Safari sin ninguna causa evidente.

### Cómo verificarlo con DevTools

1. Abrir el archivo en Chrome o Edge y presionar **F12**.
2. En la pestaña **Console**, ejecutar:

```javascript
document.querySelectorAll('span div, span h1, span h2, span h3, span p, a div')
```

3. Si el árbol en la pestaña **Elements** difiere del código fuente (por ejemplo, el `<div>` aparece como hermano del `<span>` en lugar de hijo), significa que el navegador ya lo reestructuró automáticamente.