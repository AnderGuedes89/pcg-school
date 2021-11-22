class Student {
  codigo: number;
  nome: string;
  dataNascimento: Date;

  constructor() {
    this.codigo = 0;
    this.nome = '';
    this.dataNascimento = new Date();
  }
}

export default Student;
