# Actividad #1 - Diagnóstico: ¿qué le pasa a estos elementos al activar flex?

```html
<style>
  .contenedor { /* display: flex; */ }
  .item-a { float: left; width: 200px; }
  .item-b { display: inline; vertical-align: top; }
  .item-c { margin-top: -20px; /* margin collapsing intencional */ }
</style>

<div class="contenedor">
  <div class="item-a">A</div>
  <div class="item-b">B</div>
  <div class="item-c">C</div>
</div>
```

---

### 1. ¿Qué le pasa al `float: left` de `.item-a` cuando se activa `display: flex`?

- **R:** El float queda completamente ignorado. Cuando un elemento se convierte en flex item, la propiedad `float` no tiene efecto, el elemento es controlado exclusivamente por el flex container. No flota, no sale del flujo, simplemente ocupa su lugar como cualquier otro flex item.

---

### 2. ¿Por qué el `display: inline` de `.item-b` ya no importa dentro del flex container?

- **R:** Los flex items tienen su `display` forzado a `block` internamente por el modelo de flex. Aunque en el CSS diga `display: inline`, el navegador lo trata como si fuera `block`. La razón es que flex necesita poder aplicar dimensiones (width, height, margins) a sus hijos, y los elementos inline no las respetan. El valor se sobreescribe silenciosamente.

---

### 3. ¿El `margin-top: -20px` de `.item-c` produce margin collapsing igual que en flujo normal?

- **R:** No. El margin collapsing no existe dentro de un flex container. Es un fenómeno exclusivo del flujo de bloque normal. Con `display: flex`, los márgenes negativos sí se aplican y mueven visualmente el elemento, pero no se colapsan con los márgenes de elementos adyacentes. Cada margen actúa de forma independiente.