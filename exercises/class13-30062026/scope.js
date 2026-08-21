function exterior() {
  const mensaje = "Hola desde afuera";
  function interior() {
    console.log(mensaje);
  }
  interior();
}

exterior(); 