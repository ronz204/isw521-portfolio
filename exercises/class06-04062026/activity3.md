# Actividad #Tema 3 - Diagnóstico ARIA

```html
<div role="button" aria-label="Menu" aria-expanded="false" tabindex="0">
  <img src="menu.png" alt="Menu principal">
</div>

<nav role="navigation" aria-labelledby="nav-title">
  <h2 id="nav-title" aria-hidden="true">Navegacion principal</h2>
  <ul>...</ul>
</nav>

<div aria-live="assertive">
  Bienvenido a la aplicacion.
</div>
```

---

### Problema 1: Redundancia de nombre en `<div role="button">`

- **R:** El div tiene `aria-label="Menu"` y la imagen tiene `alt="Menu principal"`. El lector de pantalla anuncia ambos. Elige una sola fuente: quita `aria-label` y deja el `alt`, o vacía el `alt` (`alt=""`) y mantén el `aria-label`.

---

### Problema 2: `role="navigation"` redundante en `<nav>`

- **R:** `<nav>` ya tiene el rol implícito `navigation`. Agregar `role="navigation"` es redundante. Elimínalo.

---

### Problema 3 (crítico): `aria-hidden` en elemento referenciado por `aria-labelledby`

- **R:** El `<h2>` está oculto con `aria-hidden="true"` pero `aria-labelledby="nav-title"` intenta leer su texto. Resultado: el nav queda sin nombre. Quita `aria-hidden` del h2 o usa `aria-label` directamente en el nav.

---

### Problema 4: `aria-live="assertive"` para bienvenida

- **R:** Assertive interrumpe inmediatamente y es para errores críticos. Un mensaje de bienvenida no es urgente. Cambia a `aria-live="polite"`.

---

### Bonus: `<div role="button">` sin manejador de teclado

- **R:** El div no responde a Enter/Space automáticamente. Necesita un listener. La solución simple: usa `<button>` nativo en lugar del div.