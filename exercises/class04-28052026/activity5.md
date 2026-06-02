# Actividad #5 - Webpack vs Vite: ¿Cuándo usar cuál?

### 1. Proyecto A: App SPA nueva con React 18, equipo de 3 devs, iteración rápida, Tailwind + TypeScript. ¿Qué herramienta?
- **R:** **Vite**. Proyecto nuevo sin deuda técnica y equipo chico que necesita iterar rápido. El setup con `npm create vite@latest` es inmediato, tiene soporte nativo para React, TS y Tailwind, y el HMR es prácticamente instantáneo. No hay razón para usar otra cosa acá.

### 2. Proyecto B: 400+ plugins propios en API de Webpack 4. Migrar sería riesgoso. ¿Qué recomendás?
- **R:** **Seguir con Webpack**. Reescribir 400 plugins a la API de Vite no vale el tiempo ni el riesgo. Lo que sí se puede hacer es cambiar el transpilador a `esbuild-loader` para bajar los tiempos de build sin tocar nada más. La deuda técnica se paga de a poco, no con una migración big bang.

### 3. Proyecto C: Librería React reutilizable que debe publicarse en npm, compatible con CJS y ESM. ¿Qué herramienta?
- **R:** **tsup** o **Rollup**. Una librería no necesita devserver ni HMR, necesita output limpio en CJS y ESM. `tsup` es lo que usa la industria hoy para librerías TypeScript: wrapper de esbuild, config mínima y genera los dos formatos sin fricción. Rollup también funciona y es lo que Vite usa internamente.