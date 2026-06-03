# Actividad #Tema 1 - Motor de Renderizado y DOM

### 1. ¿Qué construye el DOM con ese fragmento HTML?
- **R:** El parser lee el código de arriba hacia abajo y construye el árbol aunque todo esté mal cerrado. Resultado aproximado:
```
document
└── <html>
    ├── <head>
    │   └── <title> (texto: "Test", sin cierre → el parser lo infiere)
    └── <body>
        ├── <p>
        │   ├── texto: "Hola "
        │   └── <b> (texto: "mundo", sin cierre → el parser lo infiere)
        └── <p>
            └── texto: "Segunda línea"
```
El navegador aplica error recovery automático: cierra `</title>` cuando detecta `<body>`, cierra `</b>` y `</p>` al encontrar el segundo `<p>`.

### 2. ¿El navegador entra en Quirks Mode?
- **R:** **Sí.** No hay `<!DOCTYPE html>` en el fragmento, así que el navegador activa Quirks Mode. Esto significa que el box model se calcula como IE5: `width` y `height` incluyen padding y border, los márgenes `auto` no centran correctamente y algunas propiedades CSS se comportan diferente según el navegador. El CSS que escribas sobre esa página puede dar resultados distintos en Chrome vs Firefox vs Safari.

### 3. ¿Qué pasa visualmente?
- **R:** La página se renderiza igual. El usuario ve:
  - "Hola **mundo**" → la negrita abierta en `<b>` se extiende hasta que el parser decide cerrarla, que en este caso es antes del segundo `<p>`.
  - "Segunda línea" → en un párrafo separado.

  No hay error visual obvio, pero el CSS puede comportarse de forma impredecible por el Quirks Mode. La lección: el navegador es permisivo, vos tenés que ser estricto. Siempre `<!DOCTYPE html>`, siempre etiquetas cerradas.