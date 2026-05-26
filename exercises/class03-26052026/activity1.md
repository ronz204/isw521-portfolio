# Actividad #1 - Hardware vs Daemon

### 1. ¿Qué tres comandos ejecutarías primero para saber si el problema es hardware o proceso? Justificá cada uno.
- **R:**
  - `ping <IP>` → si responde, la máquina vive y el problema es del proceso.
  - `systemctl status nginx` → te dice de un vistazo si el daemon está caído o en estado `failed`.
  - `journalctl -u nginx -n 50` → muestra los últimos logs del servicio para saber por qué murió.

### 2. Si el proceso nginx está 'failed' pero la VM responde ping, ¿qué hacés exactamente?
- **R:** Primero corro `nginx -t` para ver si hay un error de configuración. Si la config está bien, hago `systemctl restart nginx`. Si vuelve a fallar, reviso `journalctl -xe` para ver el error exacto.

### 3. ¿En qué situación reiniciar la VM completa SÍ sería la decisión correcta?
- **R:** Cuando hay un kernel panic confirmado y la máquina no responde ni a ping ni a SSH, o cuando se aplicó una actualización de kernel que requiere reboot. En cualquier otro caso reiniciar sin diagnóstico solo esconde el problema real.