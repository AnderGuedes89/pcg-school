class Course {
  codigo: number;
  nome: string;
  instrutor: string;
  local: string;
  cargaHoraria: string;
  dataInicio: Date;

  constructor() {
    this.codigo = 0;
    this.nome = '';
    this.instrutor = '';
    this.local = '';
    this.cargaHoraria = '';
    this.dataInicio = new Date();
  }
}

export default Course;
