# Actividad #Tema 4 - Formularios Nativos

### 1. Construye el HTML del formulario de registro para el sistema de notas de la UTN.
- **R:**
```html
<form action="/registro" method="POST" enctype="application/x-www-form-urlencoded">

  <fieldset>
    <legend>Datos personales</legend>

    <label for="nombre">Nombre completo:</label>
    <input
      type="text"
      id="nombre"
      name="nombre"
      required
      placeholder="Ej: María González Salas"
    >

    <label for="correo">Correo institucional:</label>
    <input
      type="email"
      id="correo"
      name="correo"
      required
      placeholder="usuario@utn.ac.cr"
    >

    <label for="carne">Número de carné:</label>
    <input
      type="text"
      id="carne"
      name="carne"
      pattern="[A-Za-z]{2}[0-9]{6}"
      title="2 letras seguidas de 6 dígitos. Ej: SC202601"
      maxlength="8"
      required
      placeholder="SC202601"
    >
  </fieldset>

  <label for="sede">Sede:</label>
  <select id="sede" name="sede" required>
    <option value="">-- Seleccione una sede --</option>
    <option value="sc">San Carlos</option>
    <option value="al">Alajuela</option>
    <option value="ca">Cartago</option>
    <option value="li">Limón</option>
  </select>

  <label for="carrera">Carrera:</label>
  <input
    list="carreras"
    id="carrera"
    name="carrera"
    required
    placeholder="Escribí o elegí tu carrera"
  >
  <datalist id="carreras">
    <option value="Ingeniería en Sistemas">
    <option value="Administración de Empresas">
    <option value="Ingeniería en Construcción">
    <option value="Contabilidad">
    <option value="Computación">
  </datalist>

  <button type="submit">Registrarse</button>

</form>
```

**Decisiones técnicas:**
- `enctype="application/x-www-form-urlencoded"` es correcto acá porque no hay subida de archivos. `multipart/form-data` solo es obligatorio cuando el formulario incluye `<input type="file">`.
- El `pattern="[A-Za-z]{2}[0-9]{6}"` valida el formato del carné sin una línea de JavaScript. El atributo `title` es el mensaje de error que ve el usuario cuando el patrón no coincide.
- `<datalist>` para carrera permite que el estudiante elija de la lista o escriba una carrera que no esté en las sugerencias, lo cual es más flexible que un `<select>` cerrado.
- El `<fieldset>` con `<legend>` agrupa visualmente y semánticamente los datos personales, lo que también mejora la navegación con lectores de pantalla.