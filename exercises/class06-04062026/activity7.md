# Actividad #Tema 7 - Sistema de Diseño con Variables CSS

### 1. Custom Properties en `:root` para portal estudiantil

```css
:root {
  /* Colores */
  --color-bg:       #FFFFFF;
  --color-surface:  #F4F6F8;
  --color-primary:  #005BAC;
  --color-text:     #1A1A2E;
  --color-text-sub: #6C757D;
  --color-error:    #C0392B;
  --color-exito:    #1A7A4A;

  /* Tipografía */
  --font-base: 1rem;     /* 16px */
  --font-lg:   1.25rem;  /* 20px */
  --font-h1:   2rem;     /* 32px */
  --font-h2:   1.5rem;   /* 24px */

  /* Espaciado */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2.5rem;

  /* Bordes */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
}
```

---

### 2. Tres componentes usando variables

**a) Botón primario**

```css
.btn-primary {
  background-color: var(--color-primary);
  color: #FFFFFF;
  font-size: var(--font-base);
  padding: var(--space-sm) var(--space-lg);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
}

.btn-primary:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 3px;
}

.btn-primary:hover {
  filter: brightness(1.15);
}
```

**b) Tarjeta de información**

```css
.card-info {
  background-color: var(--color-surface);
  color: var(--color-text);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
  border-left: 4px solid var(--color-primary);
  font-size: var(--font-base);
}
```

**c) Mensaje de error**

```css
.msg-error {
  background-color: var(--color-surface);
  color: var(--color-text);
  border-radius: var(--radius-sm);
  padding: var(--space-md);
  border-left: 4px solid var(--color-error);
  font-size: var(--font-base);
}

.msg-error::before {
  content: "⚠ ";
  color: var(--color-error);
  font-weight: bold;
}
```

---

### 3. Modo oscuro con `html.dark`

- **R:**

```css
html.dark {
  --color-bg:       #0D1117;
  --color-surface:  #161B22;
  --color-text:     #E6EDF3;
  --color-text-sub: #8B949E;
  --color-primary:  #58A6FF;   /* azul más claro para contrastar sobre fondo oscuro */
  --color-error:    #F78166;   /* rojo más suave para fondo oscuro */
  --color-exito:    #3FB950;
}

/* Toggle desde JS: document.documentElement.classList.toggle('dark') */
```

  Los componentes `.btn-primary`, `.card-info` y `.msg-error` no requieren ningún cambio en su propio CSS. Al redefinir las variables en `html.dark`, todos los `var()` que usan esas propiedades se actualizan automáticamente en toda la interfaz. Eso es exactamente el poder de los design tokens: cambiar el tema tocando un solo lugar.

---

### 4. ¿Qué variables CAMBIAN entre light/dark y cuáles se mantienen iguales?

- **R:**

**Variables que CAMBIAN** — son las que dependen del nivel de luminosidad del fondo:

| Variable | Motivo del cambio |
|---|---|
| `--color-bg` | El fondo principal invierte de blanco a casi negro |
| `--color-surface` | Las superficies elevadas (cards) cambian de gris claro a gris oscuro |
| `--color-text` | El texto pasa de oscuro a claro para mantener contraste |
| `--color-text-sub` | El subtexto también necesita más luminosidad |
| `--color-primary` | El azul institucional oscuro no tiene suficiente contraste sobre fondo oscuro; se reemplaza por un azul más claro |
| `--color-error` | El rojo saturado para fondo claro puede ser agresivo en oscuro; se suaviza |
| `--color-exito` | El verde también se aclara por la misma razón |

**Variables que NO CAMBIAN** — son independientes del tema porque no dependen del contraste con el fondo:

| Variable | Motivo de estabilidad |
|---|---|
| `--font-base`, `--font-h1`, etc. | Los tamaños tipográficos no tienen relación con el color del fondo |
| `--space-xs` a `--space-xl` | El espaciado es estructural, no cromático |
| `--radius-sm`, `--radius-md`, `--radius-lg` | Los radios de borde son geométricos, no dependen del tema |

  La regla general es: **todo lo que tenga que ver con color o luminosidad cambia entre temas; todo lo que sea tipografía, espaciado o geometría se mantiene estable**.