class Matriculation {
  id: number;
  course: string;
  matriculationDate: Date;

  constructor() {
    this.id = 0;
    this.course = '';
    this.matriculationDate = new Date();
  }
}

export default Matriculation;
