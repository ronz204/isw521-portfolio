# Actividad #2 - Debate HTTP

### 1. ¿Qué beneficio concreto gana el e-commerce al migrar de HTTP/1.1 a HTTP/2?
- **R:** El principal beneficio es la **multiplexación**, que permite enviar múltiples requests y responses en paralelo sobre una única conexión TCP (evitando abrir las 6 conexiones paralelas clásicas de HTTP/1.1). Además, se gana menor overhead gracias a la compresión de headers con HPACK y la optimización del transporte al pasar a un protocolo binario.

### 2. ¿Por qué HTTP/2 no elimina completamente el HOL Blocking?
- **R:** Porque HTTP/2 resuelve el Head-of-Line Blocking únicamente a nivel de la capa de aplicación (HTTP), pero sigue corriendo sobre el protocolo TCP en la capa de transporte. Si un solo segmento TCP se pierde en el camino, todo el canal se frena por completo esperando la retransmisión de ese paquete, afectando a todos los streams que viajaban en paralelo dentro de la conexión.

### 3. ¿Tiene sentido saltar directamente a HTTP/3? ¿Qué consideraciones técnicas y de infraestructura deben evaluarse?
- **R:** Sí tiene sentido si se busca rendimiento óptimo en redes móviles o de alta latencia, pero requiere evaluar la compatibilidad de la infraestructura. Se debe verificar que los balanceadores de carga, servidores web (Nginx, Apache) y las CDNs soporten QUIC sobre UDP, además de asegurar que los firewalls de la empresa no bloqueen el tráfico UDP en el puerto 443.

### 4. ¿Cómo verificarían en producción qué versión de HTTP está usando un sitio? (Dá al menos un método técnico.)
Se puede verificar fácilmente abriendo las **DevTools** del navegador (F12), yendo a la pestaña **Network**, activando la columna **Protocol** y recargando la página. Ahí se mostrará explícitamente `h2` para HTTP/2, `h3` para HTTP/3 o `http/1.1`.