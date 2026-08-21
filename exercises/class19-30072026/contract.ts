interface CursoMatriculado {
  codigo: string;
  creditos: number;
}

interface Factura {
  numeroFactura: string | number;
  nombreEstudiante: string;
  montoTotal: number;
  cursos: CursoMatriculado[];
  descuento?: number;
}