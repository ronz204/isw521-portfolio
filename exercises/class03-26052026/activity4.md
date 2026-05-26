# Actividad #4 - Paradigmas y Arquitecturas

## Parte A — Elegí tu Modelo de Hosting

### A — Exchange de criptomonedas
- **R:** Bare Metal. Latencia menor a 1ms y millones de transacciones por segundo no son compatibles con ninguna capa de virtualización. Se necesita acceso directo al hardware sin nadie más compartiendo recursos.

### B — API REST para app móvil
- **R:** VPS o contenedores en cloud. El tráfico variable es exactamente para lo que está pensado el escalado dinámico. Con $200/mes se pueden tener varios VPS medianos o un clúster pequeño que escale automáticamente.

### C — Plataforma SaaS multi-tenant
- **R:** Contenedores (Kubernetes). 20 microservicios con equipos independientes y despliegues frecuentes es el caso de uso clásico de Kubernetes. Hace rolling updates sin bajar nada y aisla los servicios entre sí.

---

## Parte B — Cold Start: ¿cuándo importa?

### A — Función que procesa pagos en tiempo real
- **R:** Crítico. El usuario está esperando en el checkout y un cold start de Lambda puede tomar entre 100ms y 3s dependiendo del runtime. La solución es usar Provisioned Concurrency para mantener instancias calientes.

### B — Función que genera un reporte nocturno a las 2am
- **R:** No importa. No hay nadie esperando esa respuesta. Es el caso ideal para serverless: se paga solo por los segundos de ejecución real, una vez al día.

---

## Parte C — ¿Sitio Web o Aplicación Web?

### A — La Nación Digital (nacion.com)
- **R:** Híbrido. Las noticias son contenido estático, pero la cuenta de usuario, favoritos, comentarios y el paywall implican autenticación y CRUD, que ya son componentes de aplicación web.

### B — Página de proyecto final (portfolio estático)
- **R:** Sitio web puro. Sin base de datos, sin autenticación, sin estado. HTML/CSS plano o una herramienta como Astro es más que suficiente.

### C — Google Sheets
- **R:** Aplicación web en su forma más completa. CRUD en celdas, colaboración en tiempo real, historial de versiones, OAuth. Cumple todos los criterios posibles.

---

## Parte D — Elegí tu Arquitectura de Renderizado

### A — Blog de recetas personales
- **R:** SSG. El contenido cambia poco, no hay login y el SEO importa. Se genera todo en build time, se sube a una CDN y listo.

### B — Panel de pedidos en línea
- **R:** SSR + CSR híbrido. SSR para el primer load con datos frescos del servidor, luego CSR maneja las actualizaciones en tiempo real sin recargar la página.

### C — Portfolio universitario
- **R:** SSG o HTML puro. 5 páginas estáticas con PDFs no justifican ningún servidor dinámico. GitHub Pages o Netlify, cero costo, mínima complejidad.