# Actividad #3 - Reconciliación: ¿cuántos nodos del DOM real hay que tocar?

### Si una lista de 500 usuarios en pantalla solo cambia el nombre del usuario #237, ¿cuántos nodos del DOM real debería tocar un framework bien optimizado? ¿Por qué no los 500?

- **R:** Debería tocar **un solo nodo**: el que contiene el nombre del usuario #237.

No toca los 500 porque reconstruir o manipular el DOM real completo es una operación computacionalmente costosa (recalcular estilos, layout y repintado del navegador). Los frameworks modernos evitan ese costo con un Virtual DOM (React) o con sistemas de reactividad fina (Vue, Solid): comparan la representación anterior del estado contra la nueva, calculan el diff mínimo necesario y aplican solo esa modificación puntual al DOM real, en vez de re-renderizar toda la lista.

Esto es justamente lo que Vanilla JS no resuelve gratis: si la lista de 500 usuarios estuviera armada con `innerHTML`, actualizar un solo nombre obligaría a reconstruir el string completo y reinyectar los 500 elementos, perdiendo además cualquier estado interno del DOM (foco, scroll, inputs sin confirmar) que tuvieran los otros 499 nodos.
