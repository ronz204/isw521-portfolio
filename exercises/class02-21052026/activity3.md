# Actividad #3 - Análisis de Certificado Real (utn.ac.cr)

### a. ¿Quién emitió el certificado? ¿Es una Root CA o Intermediate CA?
- **R:** El certificado es emitido por una **Intermediate CA** (Autoridad Certificadora Intermedia), como por ejemplo *Let's Encrypt (R3)* o *Sectigo*. Las entidades intermedias son las encargadas de firmar los certificados finales de los sitios web para proteger la llave privada de la *Root CA* (que se mantiene desconectada).

### b. ¿Cuándo vence el certificado?
- **R:** Los certificados comerciales modernos tienen una vigencia máxima estándar de 397 días (aproximadamente 13 meses) por normativas de seguridad, mientras que si se utiliza Let's Encrypt, el vencimiento ocurre cada 90 días con renovación automática recomendada a los 60 días.

### c. ¿Qué versión de TLS está usando tu conexión?
- **R:** Utiliza **TLS 1.3** (o en su defecto TLS 1.2 dependiendo del estado de actualización del servidor de la universidad al momento de la consulta), lo cual se puede comprobar en la pestaña de Seguridad de las DevTools.

### d. ¿Qué cipher suite está en uso? Identificá qué parte es el intercambio de llaves y cuál es el cifrado simétrico.
Tomando como base un estándar moderno como `TLS_AES_128_GCM_SHA256`:
- **Intercambio de llaves:** En TLS 1.3 se realiza siempre mediante **ECDHE** (Elliptic Curve Diffie-Hellman Ephemeral) de forma implícita.
- **Cifrado simétrico:** Corresponde a **AES-128-GCM**, que es el algoritmo rápido encargado de cifrar todo el payload/datos de la navegación.
- **Integridad:** **SHA256** actúa como el hash para verificar que los datos no mutaron.

### e. ¿Qué pasaría si el certificado estuviera vencido? ¿Podría seguir siendo 'seguro'?
- **R:** Si está vencido, el navegador bloqueará el acceso con una pantalla de advertencia criptográfica. Técnicamente los datos siguen viajando cifrados, pero **deja de ser seguro** porque se rompe la autenticidad: el navegador ya no puede garantizar que el servidor actual realmente pertenece a la UTN o si estás siendo víctima de un ataque de suplantación de identidad (MitM).