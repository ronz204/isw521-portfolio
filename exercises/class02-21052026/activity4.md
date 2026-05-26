# Actividad #4 - Mapeá el ciclo completo

### 1. ¿Cuánto tiempo tardó la resolución DNS? (Waterfall → DNS Lookup)
- **R:** Con caché en frío (primera vez) suele tardar entre 20ms y 150ms dependiendo de los servidores DNS del proveedor. Si la consulta ya estaba en la caché del sistema operativo o del navegador, el tiempo baja drásticamente a **0ms** o **<1ms**.

### 2. ¿Cuánto tardó el TCP Handshake?
- **R:** El tiempo ronda la equivalencia aproximada a 2x el ping directo hacia el servidor. Al estar alojado localmente en Costa Rica, el tiempo registrado suele ubicarse por debajo de los **50ms**.

### 3. ¿Cuánto tardó el TLS Handshake?
- **R:** Al utilizar TLS 1.3, este proceso toma exactamente 1 RTT adicional al Handshake de TCP, registrando comúnmente una duración de entre **10ms y 80ms** (visibles bajo la sección de SSL en el desglose del Waterfall).

### 4. ¿Cuántos recursos en total cargó la página? ¿Cuántos usaron HTTP/2?
- **R:** El sitio web de la universidad carga múltiples recursos independientes (dependiendo de la página principal). Al revisar la columna *Protocol*, la gran mayoría se ejecutan bajo el protocolo **h2 (HTTP/2)** para optimizar la carga paralela por multiplexación.

### 5. Encontrá el recurso más pesado. ¿Qué tipo de archivo es? ¿Podría optimizarse?
- **R:** El recurso más pesado suele corresponder a imágenes (en formato PNG o JPG grandes situadas en los banners de inicio). Sí se puede optimizar significativamente realizando una compresión, aplicando *lazy loading* o migrando el formato a extensiones modernas más eficientes de la web como **WebP** o **AVIF**.