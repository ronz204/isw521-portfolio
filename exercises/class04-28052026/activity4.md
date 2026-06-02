# Actividad #4 - Diagnóstico de package.json

### 1. ¿Cuáles paquetes están en dependencies cuando deberían ser devDependencies?
- **R:** Si no corre en producción, va en `devDependencies`.
  - **`vite`** → devDependency. Es el bundler/devserver, solo se usa en dev y build.
  - **`eslint`** → devDependency. Solo analiza código durante el desarrollo.
  - **`vitest`** → devDependency. Corre los tests, que no existen en prod.
  - **`typescript`** → devDependency. Transpila TS → JS en el build, el output final es JS puro.
  - **`react`** y **`axios`** → se quedan en `dependencies`. React renderiza en el browser y axios hace peticiones en runtime.

### 2. ¿Cuál es el problema en el .gitignore y qué consecuencia concreta tiene?
- **R:** `package-lock.json` está ignorado, lo cual está mal. El lock file nunca se ignora. Sin él, cada dev hace `npm install` y puede terminar con versiones distintas. El `^` en `"react": "^18.0.0"` permite actualizaciones menores automáticas, así que dev A puede tener React 18.0 y el CI instala React 18.4 con un breaking change. El resultado es un bug que solo aparece en CI y nadie entiende por qué.

### 3. ¿Cuál es la inconsistencia y cómo quedarían los scripts correctos?
- **R:** Los scripts usan `webpack` y `node server.js`, pero el proyecto usa Vite. `npm run build` rompería de entrada. Los scripts correctos:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "test": "vitest run",
  "lint": "eslint . --fix"
}
```