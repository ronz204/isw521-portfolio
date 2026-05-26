# Actividad #2 - Virtual Hosting

### 1. Escribí las 3 entradas necesarias en /etc/hosts de tu máquina de desarrollo.
- **R:**
```
192.168.1.10    portafolio.local
192.168.1.10    api.local
192.168.1.10    admin.local
```
Las tres apuntan a la misma IP porque el servidor es uno solo. Nginx es el que separa el tráfico leyendo el header `Host:` de cada request.

### 2. Describí la configuración mínima de Nginx con 3 bloques server para esos tres sitios.
- **R:**
```nginx
server {
    listen 80;
    server_name portafolio.local;
    root /var/www/portafolio;
}

server {
    listen 80;
    server_name api.local;
    root /var/www/api;
}

server {
    listen 80;
    server_name admin.local;
    root /var/www/admin;
}
```

### 3. ¿Qué pasa si olvidás poner server_name en uno de los bloques?
- **R:** Nginx lo toma como `default_server` implícito y cualquier request que no matchee otro bloque cae ahí. Para evitar comportamiento inesperado lo mejor es declarar explícitamente `listen 80 default_server;` en el bloque que deba manejar ese tráfico.