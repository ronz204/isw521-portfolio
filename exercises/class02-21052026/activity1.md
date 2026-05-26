# Actividad #1 - Análisis TCP/IP

### 1. ¿Es técnicamente correcto el argumento de velocidad? ¿Por qué sí o por qué no?
- **R:** A medias. En latencia pura y procesamiento sí es más rápido porque no tiene el overhead del handshake ni control de flujo. Sin embargo, para archivos de configuración críticos no es correcto usarlo, ya que si un paquete se pierde o se corrompe, el archivo llegará incompleto y romperá el microservicio sin que nadie se entere.

### 2. ¿Qué mecanismos de TCP perderías al cambiar a UDP para esta tarea?
Al cambiar a UDP se perderían por completo los siguientes mecanismos:
- Entrega garantizada (acuse de recibo mediante ACKs).
- Ordenamiento secuencial de los paquetes (Sequence Numbers).
- Retransmisión automática en caso de pérdida.
- Control de flujo y control de congestión para no saturar la red.

### 3. ¿En qué escenario SÍ tendría sentido usar UDP? Dá un ejemplo concreto.
- **R:** Tiene sentido en escenarios de tiempo real donde la velocidad es la prioridad absoluta y perder un par de paquetes no destruye el proceso. Un ejemplo concreto es el streaming de audio/video (como una llamada en Zoom) o los videojuegos en línea, donde es mejor ignorar un frame perdido que pausar toda la transmisión esperando la retransmisión.

### 4. ¿Cómo afecta el 3-Way Handshake al tiempo de respuesta si los microservicios hacen muchas conexiones cortas?
- **R:** Afecta negativamente aumentando la latencia de forma crítica, ya que cada nueva conexión obliga a pagar un costo de 1.5 RTT (Round-Trip Times) antes de enviar el primer byte de datos reales. Si se hacen miles de conexiones cortas, el sistema pasará más tiempo negociando el saludo que transfiriendo archivos; para mitigar esto se debe usar *connection pooling* o mantener conexiones persistentes (*Keep-Alive*).