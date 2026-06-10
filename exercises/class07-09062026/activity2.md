# Actividad #2 - ¿En qué eje actúa cada propiedad?

### Tabla completada

| Propiedad | Con `row`: actúa en... | Con `column`: actúa en... |
|---|---|---|
| `justify-content` | eje principal = **horizontal** | eje principal = **vertical** |
| `align-items` | eje cruzado = **vertical** | eje cruzado = **horizontal** |
| `flex-basis` | eje principal = define el **ancho** base del item | eje principal = define el **alto** base del item |
| `width: 200px` | afecta el eje **horizontal** (funciona normalmente) | afecta el eje **horizontal** (ya no es el eje principal, pero sigue siendo el ancho físico) |

---

### Regla para memorizar

- `justify-content` siempre sigue el **eje principal** (main axis).
- `align-items` siempre sigue el **eje cruzado** (cross axis).
- Cuando cambia `flex-direction`, los ejes rotan y estas propiedades rotan con ellos.

Con `row`: main axis = horizontal, cross axis = vertical
Con `column`: main axis = vertical, cross axis = horizontal

`flex-basis` define el tamaño inicial del item sobre el eje principal. Con `row` es el ancho, con `column` es el alto. `width` físicamente siempre es el ancho horizontal independientemente de la dirección, pero con `column` pierde su rol de "dimensión principal".