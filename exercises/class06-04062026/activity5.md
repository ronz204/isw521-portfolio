# Actividad #Tema 5 - Selectores CSS en Acción

```html
<table id="ventas">
  <thead>
    <tr>
      <th>Mes</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Enero</td><td class="negativo">-55,000</td></tr>
    <tr><td>Febrero</td><td>120,000</td></tr>
    <tr><td>Marzo</td><td class="negativo">-30,000</td></tr>
    <tr><td>Abril</td><td>200,000</td></tr>
  </tbody>
</table>
```

---

### 1. Filas pares del `<tbody>` con fondo alternado

```css
#ventas tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}
```

`:nth-child(even)` apunta a las filas pares (Febrero, Abril).

---

### 2. Celdas con clase `.negativo` en rojo

```css
#ventas td.negativo {
  color: #c0392b;
  font-weight: bold;
}
```

Selector específico: tabla + elemento + clase.

---

### 3. Primera fila del `<tbody>` sin clase

```css
#ventas tbody tr:first-child {
  border-top: 2px solid #3498db;
}
```

`:first-child` sin clases adicionales en el HTML. Limpio.

---

### 4. El segundo `<th>` con combinador de hermano adyacente

```css
#ventas thead th + th {
  text-align: right;
}
```

Combinador `A + B`: el th que viene después de otro th. El segundo encabezado.