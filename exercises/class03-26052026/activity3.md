# Actividad #3 - Puertos y Concurrencia

## Parte A — Error EADDRINUSE en puerto 8080

### 1. ¿Qué significa exactamente ese error? ¿A nivel de OS, qué pasó?
- **R:** Significa que otro proceso ya tiene ese puerto ocupado. Cuando tu app intenta hacer `bind()` en el 8080, el SO lo rechaza porque solo un proceso puede tenerlo a la vez. Probablemente el proceso anterior cerró mal y el socket quedó colgado.

### 2. ¿Qué comando usarías para identificar cuál proceso ocupa el puerto 8080?
- **R:**
```bash
# macOS / Linux
lsof -i :8080

# Windows
netstat -ano | findstr :8080
```
Ambos te dan el PID del proceso que tiene el puerto.

### 3. Una vez identificado el proceso, ¿cómo lo terminás sin reiniciar la máquina?
- **R:**
```bash
# Linux / macOS
kill -9 <PID>

# Windows
taskkill /PID <PID> /F
```

### 4. ¿Cómo prevenirías esta situación en el futuro con Node.js?
- **R:** Escuchando `SIGINT` para cerrar el servidor limpiamente antes de salir, así el SO libera el puerto:
```js
process.on('SIGINT', () => {
    server.close(() => process.exit(0));
});
```
O directamente usar pm2 que maneja el ciclo de vida del proceso y evita este tipo de situaciones.

---

## Parte B — Apache vs Nginx (WebSockets con 50,000 usuarios)

### a. ¿Cuál servidor recomendarían y por qué?
- **R:** Nginx. Su modelo event-driven asíncrono está diseñado para conexiones persistentes como WebSockets. Puede manejar 50,000 conexiones con pocos workers y poca RAM, mientras que Apache Prefork levanataría un proceso por cada conexión, lo que es inviable.

### b. ¿Cómo afecta Apache Prefork a la RAM con 50,000 conexiones?
- **R:** Cada proceso de Prefork consume ~20-50 MB. Con 50,000 conexiones el cálculo da alrededor de 1 TB de RAM, lo cual ningún servidor tiene. Con Nginx el mismo escenario ronda los 500 MB en total.

### c. ¿Qué directiva específica de Nginx se necesita para soportar WebSockets?
- **R:** En el bloque `location` del proxy se agregan:
```nginx
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```
Sin esto Nginx cierra la conexión como HTTP normal y el WebSocket nunca se establece.