## Reflexión Final: Codificar con IA vs. Revisar su Output Críticamente

Trabajar con inteligencia artificial en el desarrollo frontend revela una
distinción fundamental que este laboratorio hace evidente: **generar código con
IA y validar ese código son habilidades completamente distintas**, y la segunda
es técnicamente más exigente que la primera.

Un prompt genérico produce resultados genéricos. Solo al construir la Sección C
de este ejercicio —listando restricciones específicas como el atributo `scope`
en cada `<th>` o el valor exacto del `sandbox` del `<iframe>`— se comprende que
la IA no "entiende" HTML5: ejecuta instrucciones. Si las instrucciones son vagas,
el output será plausible pero incorrecto, y lo más peligroso de ese escenario es
que el código *se verá* bien en el navegador sin serlo estructuralmente.

La revisión crítica del output exige el conocimiento técnico que supuestamente
la IA reemplazaría. Detectar que un `<div>` sobrevivió dentro de un `<span>`,
que un `<label>` tiene `for` sin `id` coincidente, o que el `<video>` omitió el
`poster` requiere saber exactamente qué buscar y por qué importa. La IA acelera
la escritura; el criterio técnico del desarrollador sigue siendo el único filtro
de calidad real.

En conclusión, el rol del desarrollador no desaparece con estas herramientas:
**se desplaza desde la escritura de código hacia la especificación precisa de
requisitos y la auditoría rigurosa del resultado**. Quien domine ambas fases
será más productivo; quien delegue la segunda, solo acumulará deuda técnica más
rápido.