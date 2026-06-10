# Actividad #3 - Bug de alineación: ¿qué está mal y cómo se arregla?

```css
.toolbar {
  display: flex;
  flex-direction: column;  /* ← el dev agregó esto "para ordenar" */
  justify-content: flex-end;   /* quería botones a la derecha */
  align-items: center;         /* quería centrado vertical */
  height: 80px;
}
```

---

### 1. Con `flex-direction: column`, ¿`justify-content: flex-end` mueve los botones a la derecha o hacia abajo?

- **R:** Hacia abajo. Con `column`, el eje principal es vertical. `justify-content` actúa sobre el eje principal, así que `flex-end` empuja los items al fondo del contenedor, no a la derecha. El dev confundió el eje.

---

### 2. ¿Qué eje controla `align-items` cuando la dirección es `column`?

- **R:** El eje cruzado, que con `column` es el horizontal. Entonces `align-items: center` centra los items horizontalmente, no verticalmente. Es lo opuesto a lo que el dev pensaba que estaba haciendo.

---

### 3. ¿Cómo corriges el CSS para que los botones queden a la derecha y centrados verticalmente?

- **R:** Eliminar `flex-direction: column` (o cambiarlo de vuelta a `row`, que es el default) y dejar `justify-content` y `align-items` como estaban. Con `row`:
  - `justify-content: flex-end` → empuja los items a la **derecha** ✓
  - `align-items: center` → centra los items **verticalmente** ✓

```css
.toolbar {
  display: flex;
  /* flex-direction: row; ← es el default, no hace falta escribirlo */
  justify-content: flex-end;
  align-items: center;
  height: 80px;
}
```

El `flex-direction: column` era el culpable. Al rotarlo, `justify-content` y `align-items` intercambian los ejes sobre los que actúan.