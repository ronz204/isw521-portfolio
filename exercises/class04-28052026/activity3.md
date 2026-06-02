# Actividad #3 - Branching, Merge y Pull Request

### 1. ¿Será fast-forward o 3-way merge al integrar feature/user-profile en main? Justificá técnicamente.
- **R:** **3-way merge**. Tanto `main` como `feature/user-profile` tienen commits después del ancestro común, así que Git necesita los tres puntos: el ancestro, el tip de la feature y el tip de main. Fast-forward solo aplica cuando main no tuvo ningún commit nuevo desde que se creó la rama, lo cual acá no es el caso.

### 2. ¿Qué comandos usás para revisar los cambios de origin/feature/dark-mode SIN integrarlos todavía?
- **R:**
```bash
git fetch origin
git log origin/feature/dark-mode --oneline
git diff main origin/feature/dark-mode
git checkout origin/feature/dark-mode   # para mirarlo en detached HEAD
```
Con `fetch` bajás los objetos sin tocar nada local. De ahí podés revisar tranquilo antes de decidir qué hacer.

### 3. Describí los 4 elementos esenciales que debe tener la descripción de un Pull Request profesional.
- **R:**

**1. Título semántico** con tipo y scope del cambio:
```
feat(profile): add user profile page with avatar upload
```

**2. Qué hace el PR** — un párrafo corto explicando el cambio en términos funcionales, no técnicos.

**3. Cambios incluidos** — lista de lo que se tocó: rutas nuevas, endpoints, validaciones, dependencias relevantes.

**4. Cómo probarlo** — pasos reproducibles para verificar que funciona, más referencia al issue y reviewer:
```
Closes #42 — Reviewers: @compañero-senior
```