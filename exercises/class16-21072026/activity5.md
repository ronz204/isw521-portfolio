# Actividad #5 - Lo que React puro no trae de fábrica

### React puro no trae enrutador ni manejo de estado global de fábrica. Enumeren qué tendría que agregar un equipo para construir una tienda en línea completa (mínimo tres piezas externas).

- **R:** Para armar una tienda en línea completa sobre React puro, como mínimo hay que sumar:

- **Enrutador:** `React Router`, para gestionar la navegación entre páginas (catálogo, detalle de producto, carrito, checkout) sin recargar la app.
- **Manejo de estado global:** `Zustand` o `Redux`, para sincronizar el carrito de compras y la sesión del usuario entre componentes que no tienen relación padre-hijo directa.
- **Cliente HTTP y gestión de fetching:** `TanStack Query` o `Axios`, para conectar con las APIs REST de procesamiento de pagos y gestión de órdenes, con manejo de cache, loading y reintentos.

A diferencia de Angular (Actividad #4), estas tres piezas no vienen integradas ni versionadas en conjunto: el equipo tiene que elegirlas, instalarlas y mantenerlas actualizadas por separado, además de decidir cómo se comunican entre sí. Esa libertad es potente para un equipo chico y ágil, pero es exactamente el motivo por el que un banco con 40 desarrolladores y alta rotación se beneficia más de un framework opinionado.
