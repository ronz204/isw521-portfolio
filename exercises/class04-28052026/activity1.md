# Actividad #1 - Diagnóstico de Commits, .gitignore y Estados Git

### 1. ¿Cuáles commits violan Conventional Commits? Reescribílos con el formato correcto.
- **R:**
```
arreglo del login      -> fix(auth): resolve login redirect loop
cambios de bryan       -> refactor(ui): clean up navbar component
feature nueva          -> feat(checkout): add multi-step payment form
```
Los tres violan la convención porque no tienen tipo, no tienen scope y no describen qué cambió ni dónde. El historial con esos mensajes es inútil para cualquier persona que entre al proyecto después.

### 2. ¿Cuáles commits representan un problema de seguridad? ¿Qué debiste haber configurado antes del primer commit?
- **R:** Los commits `f01b334 node_modules/` y `e5d2198 .env` son el problema. El `.env` con credenciales en un repo público es un incidente de seguridad: hay bots que escanean GitHub buscando exactamente eso, y el historial de Git es permanente, así que borrar el archivo en el siguiente commit no sirve de nada. Hay que **revocar las claves** en la plataforma afectada.

Lo que debía estar en el `.gitignore` desde antes del primer commit:
```
node_modules/
dist/
build/
.env
.env.local
.env.*.local
*.log
.DS_Store
coverage/
```

### 3. ¿En qué estado Git está un archivo recién creado sin git add? ¿Y uno con git add pero sin commit?
- **R:**
  - Archivo recién creado sin `git add` → **Untracked** (Working Directory). Git lo ve en `git status` bajo "Untracked files" pero no lo controla ni lo rastreará hasta que lo agregués.
  - Archivo con `git add` sin commit → **Staged** (Staging Area / Index). Aparece bajo "Changes to be committed". Ya está preparado para el próximo snapshot, pero no forma parte del historial todavía.