# Actividad #Tema 6 - Diagnóstico de Layout (Box Model)

CSS:
```css
.contenedor { width: 600px; }
.col-izq    { width: 300px; padding: 20px; float: left; }
.col-der    { width: 300px; padding: 20px; float: right; }
```

---

### 1. Ancho real de cada columna con `box-sizing: content-box`

- **R:** Content-box (default): `width` es solo el contenido.
```
.col-izq: 300px contenido + 40px padding = 340px total
.col-der: 300px contenido + 40px padding = 340px total

Total: 680px
```

---

### 2. ¿Por qué se desbordan?

- **R:** Contenedor = 600px, columnas = 680px. No caben, la segunda cae debajo. El error es pensar que `width: 300px` es el ancho total cuando con content-box solo es el contenido sin padding.

---

### 3. Con `box-sizing: border-box`

```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

Ahora `width` es el total incluyendo padding:
```
.col-izq: 300px total (260px contenido + 40px padding)
.col-der: 300px total (260px contenido + 40px padding)

Total: 600px ← caben perfecto
```

---

### 4. ¿Existe un problema de clearfix?

- **R:** Sí. Los floats salen del flujo normal y el contenedor colapsa su altura a 0. El fondo/borde se rompe. Soluciones:
```css
/* Opción 1 */
.contenedor { overflow: hidden; }

/* Opción 2 (más limpia) */
.contenedor { display: flow-root; }
```

En proyectos modernos simplemente usa Flexbox o Grid en lugar de float.