# Actividad #Tema 2 - HTML Semántico y Outline

### 1. Reescribe el div-soup con etiquetas semánticas correctas y justifica cada elección.
- **R:**
```html
<header>
  <nav>
    <a href="/">Inicio</a>
  </nav>
</header>

<main>
  <article>
    <h1>Mi artículo</h1>
    <p>Contenido del artículo...</p>
  </article>

  <aside>
    <p>Tags relacionados</p>
  </aside>
</main>

<footer>
  <p>© 2026</p>
</footer>
```

**Justificación de cada elección:**

- `<header>` reemplaza `div.header` → es el encabezado de la página, contiene la identidad y la navegación principal.
- `<nav>` reemplaza `div.menu` → agrupa los enlaces de navegación principal. No todo grupo de `<a>` es `<nav>`, pero el menú principal sí califica.
- `<main>` reemplaza `div.main` → envuelve el contenido central y único de la página. Solo puede haber uno por documento.
- `<article>` reemplaza `div.post` → el post es contenido autónomo. Si lo sacás de la página y lo publicás en otro sitio, sigue teniendo sentido por sí solo. Esa es la prueba del copy-paste: si pasa, es `<article>`.
- `<h1>` en lugar de `<h2>` → dentro del `<article>`, este es el título principal del contenido. El `<h2>` original era solo un hábito visual; la jerarquía semántica manda.
- `<aside>` reemplaza `div.sidebar` → los tags son contenido tangencial. Complementan el artículo pero no son el cuerpo principal.
- `<footer>` reemplaza `div.footer` → pie de página con información secundaria (derechos, contacto, etc.).