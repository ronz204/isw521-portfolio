# Actividad #5 - Mini-proyecto: layout completo con Flexbox

Objetivo: recrear el layout usando únicamente Flexbox.

```
NAVBAR: logo izquierda · links · botón CTA
SIDEBAR (flex:1) | CONTENIDO (flex:3) | PANEL (flex:1)
FOOTER: 3 columnas iguales
```

---

### HTML

```html
<body>
  <nav class="navbar">
    <span class="navbar-logo">Logo</span>
    <ul class="navbar-links">
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Cursos</a></li>
      <li><a href="#">Blog</a></li>
    </ul>
    <button class="navbar-cta">Registrarse</button>
  </nav>

  <div class="body-wrapper">
    <aside class="sidebar">Sidebar</aside>
    <main class="contenido">Contenido principal</main>
    <section class="panel">Panel</section>
  </div>

  <footer class="footer">
    <div>Columna 1</div>
    <div>Columna 2</div>
    <div>Columna 3</div>
  </footer>
</body>
```

---

### CSS

```css
/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0 1.5rem;
  height: 60px;
}

.navbar-links {
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Body: columnas */
.body-wrapper {
  display: flex;
  min-height: calc(100vh - 120px); /* descontando navbar y footer */
}

.sidebar   { flex: 1; }
.contenido { flex: 3; }
.panel     { flex: 1; }

/* Footer */
.footer {
  display: flex;
  height: 60px;
}

.footer > div {
  flex: 1;
}
```

---

### Por qué funciona cada parte

- **Navbar:** `justify-content: space-between` separa logo, links y CTA en los extremos. `align-items: center` los centra verticalmente dentro de los 60px de altura.
- **Body:** `display: flex` en `.body-wrapper` pone las tres columnas en fila. `flex: 1`, `flex: 3`, `flex: 1` reparten el espacio disponible en proporción 1-3-1 sin necesidad de calcular porcentajes.
- **Footer:** mismo patrón, tres divs con `flex: 1` cada uno para columnas exactamente iguales.