# Actividad #Tema 2 - Trampa de Teclado (Focus Trap)

### 1. ¿Por qué ocurre el comportamiento reportado?

- **R:** El modal abre pero no atrapa el foco. Cuando presionas Tab en el último elemento, el foco escapa hacia el fondo. El problema es que el modal nunca le dice al navegador que el foco debe quedarse adentro.

---

### 2. Solución conceptual: ¿cómo se atrapa el foco?

- **R:** Implementar un focus trap que:
  1. Recopile todos los elementos focusables dentro del modal.
  2. Identifique el primero y el último.
  3. Escuche la tecla Tab:
     - Si estás en el último y presionas Tab → devuelve el foco al primero.
     - Si estás en el primero y presionas Shift+Tab → devuelve al último.
  4. Al cerrar, restaura el foco al botón que abrió el modal.

---

### 3. Pseudocódigo JS del focus trap

- **R:**

```js
function focusTrap(modalEl) {
  const focusables = modalEl.querySelectorAll(
    'a[href], button:not([disabled]), input, select, textarea, [tabindex="0"]'
  );

  const first = focusables[0];
  const last = focusables[focusables.length - 1];

  modalEl.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  first.focus();
}
```
