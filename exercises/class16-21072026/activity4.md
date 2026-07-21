# Actividad #4 - Angular vs. una librería más ligera para un banco con alta rotación

### Un banco costarricense necesita un sistema interno para 40 desarrolladores durante los próximos 8 años, con alta rotación de personal. ¿Angular o una librería más ligera (como React)? Justifiquen con al menos dos criterios técnicos.

- **R:** Para este escenario, **Angular** es la opción más adecuada. Dos criterios técnicos:

**1. Convención impuesta vs. libertad estructural.** Angular es un framework "todo incluido": trae su propio router, inyección de dependencias, manejo de formularios (reactive forms), cliente HTTP y una guía de estilo oficial. Con 40 desarrolladores y alta rotación, esa rigidez es una ventaja: cualquiera que entre al equipo encuentra la misma estructura de módulos, servicios y componentes que en cualquier otro proyecto Angular. Una librería como React solo resuelve la capa de vista; el router, el estado global y el cliente HTTP quedan a elección de cada equipo (ver Actividad #5), y con alta rotación esas decisiones tienden a volverse inconsistentes entre módulos si no hay una arquitectura documentada y sostenida en el tiempo.

**2. TypeScript de fábrica y ciclo de vida a largo plazo.** Angular está escrito en y para TypeScript desde el núcleo, lo que reduce errores de tipos en un sistema bancario donde la corrección es crítica. Además, tiene un ciclo de versiones mayor predecible, con guías oficiales de migración, respaldado por Google y pensado para proyectos empresariales de largo aliento. Para un horizonte de 8 años, esa previsibilidad pesa más que la flexibilidad y el ecosistema más liviano que ofrece React.

En resumen: cuanto más grande el equipo, más alta la rotación y más largo el horizonte del proyecto, más valiosa es la convención impuesta por un framework opinionado como Angular frente a la libertad —y la carga de decisiones— que da una librería como React.
