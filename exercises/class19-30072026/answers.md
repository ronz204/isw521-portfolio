Actividad 1: Depende si typescript tiene activo el strictNullChecks, el error se detecta en el tiempo de complicacion. Porque TS exige validar la existaencia de ese valor. Si esta desactivado entonces el error ocurre en el tiempo de ejecucion. 

Actividad 2: La funcion procesar(input: any) {return input.toFixed(2)}: Refactorizado queda como: 
function procesar(input: unknown) {
if (typeof input === 'number') {
    return input.toFixed(2); 
    }

return '0.00';
}

Actividad 3: type DisponibilidadLaboratorio = {
    estado: 'disponible'|'ocupado'|'en-mantenimiento'; 
    computadorasLibres: number;
    };
