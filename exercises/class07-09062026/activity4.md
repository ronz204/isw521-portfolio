# Actividad #4 - ¿Por qué no funciona `align-content` aquí?

```css
.galeria {
  display: flex;
  width: 600px;
  height: 300px;
  align-content: space-between;  /* parece no tener efecto */
}

.card {
  width: 150px;
  height: 100px;
}
```

---

### 1. ¿Cuál es la propiedad que falta para que `align-content` tenga efecto visual?

- **R:** `flex-wrap: wrap`. `align-content` distribuye las **líneas** del flex container, pero si todo cabe en una sola línea (que es el comportamiento por defecto), no hay múltiples líneas que distribuir y la propiedad no hace nada. Para que existan múltiples líneas hay que permitir el wrap.

---

### 2. ¿Qué propiedad de alineación SÍ podría estar actuando aunque `align-content` no haga nada?

- **R:** `align-items`. Como hay una sola línea, `align-items` sigue controlando cómo se alinean los items dentro de esa línea en el eje cruzado. El valor por defecto es `stretch`, así que las cards se estiran verticalmente hasta los 300px del contenedor aunque tengan `height: 100px` definido.

---

### 3. CSS corregido para que 5 cards de 150px hagan wrap y sus líneas se distribuyan con `space-between`

```css
.galeria {
  display: flex;
  flex-wrap: wrap;           /* ← permite múltiples líneas */
  width: 600px;
  height: 300px;
  align-content: space-between;  /* ahora sí tiene efecto */
}

.card {
  width: 150px;
  height: 100px;
}
```

Con `flex-wrap: wrap` y 5 cards de 150px en un contenedor de 600px: caben 4 en la primera línea y 1 en la segunda. Esas dos líneas se distribuyen con `space-between` en el eje vertical de los 300px.