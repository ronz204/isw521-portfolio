# Actividad #Tema 1 - Auditoría de Contraste WCAG

### Parte A: Cálculo manual del ratio de contraste

**Colores:** fondo `#0D6EFD` · texto `#FFFFFF`

- **R:** Seguir la fórmula del W3C en tres pasos:

**Paso 1 — Luminancia de `#0D6EFD` (R=13, G=110, B=253):**

Normalizar canales (valor / 255):
- R: 13/255 = 0.0510
- G: 110/255 = 0.4314
- B: 253/255 = 0.9922

Corregir gamma:
- R_lin = 0.0510/12.92 = 0.0004
- G_lin = ((0.4314+0.055)/1.055)^2.4 = 0.158
- B_lin = ((0.9922+0.055)/1.055)^2.4 = 0.964

Luminancia:
```
L = 0.2126(0.0004) + 0.7152(0.158) + 0.0722(0.964)
L ≈ 0.183
```

**Paso 2 — Luminancia de `#FFFFFF`:** L = 1.0

**Paso 3 — Ratio:** (1.0 + 0.05) / (0.183 + 0.05) = 1.05 / 0.233 ≈ **4.51:1**

---

### Parte B: ¿Cumple AA? ¿Cumple AAA?

- **R:** Ratio obtenido: 4.51:1
  - Nivel AA (texto normal): mínimo 4.5:1 → **SÍ cumple** ✓
  - Nivel AAA: mínimo 7.0:1 → **NO cumple** ✗

Está en el límite exacto del AA. Cabe en la especificación pero sin margen.

---

### Parte C: Nivel de conformidad para botón 16px peso normal

- **R:** 16px peso normal es texto normal (< 18pt). Umbral AA sigue siendo 4.5:1. Con 4.51:1 el botón alcanza AA pero no AAA. Para AAA habría que oscurecer el azul significativamente o aumentar el contraste del fondo.