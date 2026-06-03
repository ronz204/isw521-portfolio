# Actividad #Tema 5 - Tablas de Datos

### 1. Codifica el horario de clases de ISW usando colspan donde corresponda.
- **R:**
```html
<table>
  <caption>Horario ISW - I Cuatrimestre 2026</caption>

  <thead>
    <tr>
      <th scope="col">Hora</th>
      <th scope="col">Lunes</th>
      <th scope="col">Martes</th>
      <th scope="col">Miércoles</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>7:00</td>
      <td>ISW-521</td>
      <td>ISW-311</td>
      <td>Libre</td>
    </tr>

    <tr>
      <td>9:00</td>
      <td colspan="3">Receso</td>
    </tr>

    <tr>
      <td>10:00</td>
      <td>ISW-421</td>
      <td>ISW-521</td>
      <td>ISW-311</td>
    </tr>
  </tbody>
</table>
```

**La clave del colspan:** la fila de las 9:00 tiene solo **2 celdas** en lugar de 4: una para la hora y una con `colspan="3"` que se expande sobre las columnas de Lunes, Martes y Miércoles. Si ponés las 4 celdas normales más el `colspan`, la tabla se desborda y rompe el alineamiento de todas las columnas.

**Por qué `scope="col"` en los `<th>`:** el atributo `scope` le indica a los lectores de pantalla si ese encabezado describe una columna (`col`) o una fila (`row`). Sin él, la accesibilidad de la tabla es incompleta.