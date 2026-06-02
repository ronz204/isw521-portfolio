# Actividad #2 - Autenticación y Sincronización con GitHub

### 1. ¿Cuál es el comando correcto para descargar los cambios SIN modificar tu rama local? ¿Por qué preferirías ese en lugar de git pull?
- **R:**
```bash
git fetch origin
git log origin/main --oneline --graph
git diff main origin/main
```
`git pull` hace fetch + merge automático, o sea te mezcla los cambios sin que vos hayas visto qué llegó. Con `fetch` primero mirás qué vino y después decidís cómo integrarlo.

### 2. ¿Qué secuencia de comandos usarías para hacer un historial limpio y lineal?
- **R:**
```bash
git fetch origin
git rebase origin/main
git push origin main
```
El `rebase` pone tus commits encima de los del remoto, así no aparece ningún merge commit de más. El resultado es un historial en línea recta, mucho más fácil de seguir.

### 3. Tu git push falla con 'rejected -- non-fast-forward'. ¿Qué significa eso y cuál es el flujo correcto para resolverlo?
- **R:** Significa que el remoto tiene commits que vos no tenés. Git no acepta el push para no perder esos cambios. El flujo:
```bash
git fetch origin
git rebase origin/main
git push origin main
```
Nada de `git push --force` en ramas compartidas. Reescribir el historial remoto le rompe el repo a todos los que ya tenían esos commits.