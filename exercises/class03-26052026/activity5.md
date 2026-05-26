# Actividad #5 - Sesiones, Despliegue y CORS

## Parte A — Sesiones y Tokens

### ¿Cuál descartás inmediatamente y por qué?
- **R:** La Opción C. Guardar la contraseña en `localStorage` es una vulnerabilidad crítica porque cualquier script JavaScript en la página puede leerlo sin restricciones. No hay escenario donde eso sea aceptable.

### Entre A y B, ¿cuál preferís en producción y por qué?
- **R:** Opción B (Cookie HttpOnly). El navegador la envía automáticamente pero JavaScript no puede leerla, así que un XSS no puede robar el token aunque logre inyectar código. El JWT en `localStorage` funciona y es común en SPAs, pero queda expuesto ante cualquier superficie de XSS.

---

## Parte B — Despliegue Manual en VPS

### 1. ¿Qué protocolo usarías para transferir archivos y cómo?
- **R:** SCP. FTP queda descartado porque envía credenciales en texto plano. El comando para transferir `/dist`:
```bash
scp -r ./dist usuario@192.168.1.10:/var/www/mi-app/
```

### 2. ¿Cómo configurás las variables de entorno en el VPS sin escribirlas en el código?
- **R:** Se crea un `.env` directamente en el servidor (nunca en el repo) y se carga con `dotenv`:
```bash
echo 'DB_URL=mongodb://...' >> /home/ubuntu/.env
echo 'JWT_SECRET=supersecreto' >> /home/ubuntu/.env
```
```js
require('dotenv').config();
const secret = process.env.JWT_SECRET;
```

### 3. Dame 3 razones para rechazar subir el .env al repositorio.
- **R:**
  - Los repos públicos son indexados por bots que escanean claves de API a los pocos minutos del push.
  - El historial de git es permanente: aunque borres el archivo, la clave sigue en los commits anteriores.
  - En un equipo, cada miembro tendría credenciales de producción en su máquina. Si un dispositivo se compromete, todo queda expuesto.

---

## Parte C — Debug de CORS

### Caso 1: `fetch(..., { mode: "no-cors" }).then(r => r.json())`
- **R:** No funciona. Con `mode: 'no-cors'` JavaScript recibe una opaque response: `status = 0`, body vacío. El `.then(r => r.json())` lanza un `TypeError` porque no hay nada que parsear. Ese modo solo sirve para fire-and-forget, nunca para consumir datos.

### Caso 2: Servidor responde `Access-Control-Allow-Origin: *` + `credentials: "include"`
- **R:** Error garantizado. El wildcard `*` y `credentials: 'include'` son mutuamente excluyentes por la especificación CORS. Para que funcione con credenciales, el servidor debe poner el origen exacto y agregar `Access-Control-Allow-Credentials: true`.

### Caso 3: DELETE con Authorization, servidor sin manejo de OPTIONS
- **R:** Un `DELETE` con header `Authorization` dispara un preflight `OPTIONS` automático. Si el servidor no maneja `OPTIONS`, ese preflight falla y el `DELETE` nunca llega. En consola aparece `"Response to preflight request doesn't pass access control check"`. El fix es en el servidor, no en el cliente.