# Actividad #Tema 4 - Batalla de Selectores CSS

```html
<main id="contenido">
  <p class="texto destacado">Parrafo A</p>
  <p class="texto">Parrafo B</p>
</main>
```

CSS (en orden):
```css
p                  { color: gray; }
.texto             { color: blue; }
#contenido p       { color: green; }
.texto.destacado   { color: red; }
main p.texto       { color: orange; }
```

---

### Especificidad de cada regla

| Selector | IDs | Clases | Elementos | Gana? |
|---|---|---|---|---|
| `p` | 0 | 0 | 1 | No |
| `.texto` | 0 | 1 | 0 | No |
| `#contenido p` | 1 | 0 | 1 | **SÍ** |
| `.texto.destacado` | 0 | 2 | 0 | No |
| `main p.texto` | 0 | 1 | 2 | No |

Un ID (columna A) supera cualquier cantidad de clases (columna B).

---

### ¿Qué color tiene Párrafo A? (`class="texto destacado"`)

- **R:** Verde. El selector `#contenido p` tiene un ID, que supera todo lo demás.

---

### ¿Qué color tiene Párrafo B? (`class="texto"`)

- **R:** Verde. Mismo ID, misma regla gana.

---

### Lección clave

- **R:** Ambos quedan verdes aunque A tiene más clases. Un solo ID supera cualquier cantidad de clases. Por eso no uses IDs para estilos CSS en proyectos reales: luego es imposible sobrescribir sin `!important` y eso causa un caos de mantenimiento.