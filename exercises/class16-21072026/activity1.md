# Actividad #1 - Sincronizando el DOM a mano: agregar un botón "Reiniciar"

```js
// Sin framework: hay que sincronizar todo a mano
let contador = 0;

document.getElementById("btnSumar").addEventListener("click", () => {
  contador++;
  document.getElementById("valor").innerText = contador;
  document.getElementById("historial").innerHTML += `<li>Click #${contador}</li>`;
  // si hay un contador en el header, hay que actualizarlo AQUÍ TAMBIÉN
});
```

---

### En parejas: el fragmento de arriba necesita un botón "Reiniciar" que también resetee el contador visual y el historial. Identifiquen cuántas líneas de `innerHTML`/`innerText` tocarían a mano y qué pasa si alguien olvida una.

- **R:**

```js
document.getElementById("btnReiniciar").addEventListener("click", () => {
  contador = 0;

  document.getElementById("valor").innerText = contador;  // 1. reset del contador visual
  document.getElementById("historial").innerHTML = "";    // 2. limpieza del historial
  // 3. si existiera el contador del header mencionado en el ejemplo, sería una línea más
});
```

Son **2 líneas** de manipulación manual del DOM (3 si el header también mostrara el contador). El problema no es escribirlas una vez, sino que cada pieza nueva de UI que dependa de `contador` agrega una línea más que hay que recordar tocar en **todos** los lugares donde el estado cambia: al sumar, al reiniciar, y en cualquier handler futuro.

Si alguien olvida una línea, el resultado no es un error visible en consola, es algo peor: la aplicación queda en un estado inconsistente sin ninguna pista de por qué. Por ejemplo, si se olvida limpiar el `historial`, el contador visual vuelve a marcar 0 pero la lista de clics anteriores sigue en pantalla, dando la sensación de un reinicio "a medias". Con diez lugares de la UI atados a `contador`, la probabilidad de olvidar uno crece con cada funcionalidad nueva que se agrega.
