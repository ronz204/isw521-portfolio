# Actividad #2 - El paradigma declarativo: cero líneas de `innerHTML`

```jsx
// Declarativo: solo describimos el estado
function Contador() {
  const [valor, setValor] = useState(0);

  return (
    <div>
      <p>Valor actual: {valor}</p>
      <button onClick={() => setValor(valor + 1)}>Sumar</button>
    </div>
  );
}
// Nadie llama a document.querySelector. El framework se encarga.
```

---

### Comparen este fragmento con el de Vanilla JS de la diapositiva anterior. Si quisiéramos agregar un historial de clics aquí, ¿cuántas líneas de `innerHTML` tendríamos que escribir a mano?

- **R:** **0 líneas.** Al tratarse de un paradigma declarativo, la interfaz se actualiza de forma reactiva en función del estado: alcanza con guardar el historial en un nuevo `useState` (un array de clics) y declararlo directamente en el JSX, dejando que el framework reconcilie el DOM por su cuenta.

```jsx
function Contador() {
  const [valor, setValor] = useState(0);
  const [historial, setHistorial] = useState([]);

  const sumar = () => {
    const nuevoValor = valor + 1;
    setValor(nuevoValor);
    setHistorial([...historial, nuevoValor]);
  };

  return (
    <div>
      <p>Valor actual: {valor}</p>
      <button onClick={sumar}>Sumar</button>
      <ul>
        {historial.map((click, i) => <li key={i}>Click #{click}</li>)}
      </ul>
    </div>
  );
}
```

No hay ningún `innerHTML +=`, ningún `getElementById`, ni un lugar donde "olvidar" actualizar el DOM: el `<ul>` se recalcula solo cada vez que `historial` cambia. Es la diferencia central frente a la Actividad #1: en Vanilla JS cada pieza de UI nueva es una línea manual más que mantener; en React, es un estado más que declarar.
