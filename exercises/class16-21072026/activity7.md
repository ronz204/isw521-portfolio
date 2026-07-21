# Actividad #7 - Webpack vs. Vite: ¿por qué el dev server arranca tan distinto?

### En equipos de trabajo: comparen cómo Webpack y Vite sirven la aplicación durante el desarrollo. ¿Por qué un proyecto grande en Vite arranca casi al instante mientras que en Webpack el arranque se siente cada vez más lento a medida que crece el código?

- **R:** La diferencia está en qué hace cada herramienta **antes** de poder mostrar la primera pantalla:

- **Webpack** arma un bundle completo de la aplicación (o al menos de todo lo alcanzable desde el entry point) antes de levantar el servidor de desarrollo. A medida que el proyecto crece, ese trabajo de resolución y empaquetado crece con él, así que el tiempo de arranque —y el de cada rebuild tras un cambio— se degrada con el tamaño del código.
- **Vite** aprovecha que los navegadores modernos soportan módulos ES nativos (`import`/`export`) y no arma un bundle completo para desarrollo: sirve los archivos como módulos individuales directamente al navegador, y solo transforma/compila bajo demanda el módulo que el navegador está pidiendo en ese momento. Las dependencias de `node_modules` se pre-empaquetan una única vez con `esbuild` (mucho más rápido que los bundlers basados en JavaScript), y el resto del código del proyecto se sirve tal cual, sin volver a empaquetarlo en cada guardado.

Por eso el tiempo de arranque de Vite se mantiene prácticamente constante sin importar cuántos archivos tenga el proyecto: no depende del tamaño total del código, sino de cuántos módulos pide el navegador para pintar la pantalla actual. Webpack sigue siendo una opción sólida para el bundle de producción (de hecho Vite usa Rollup para esa parte), pero como servidor de desarrollo paga el costo de empaquetar todo por adelantado.
