import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Matriculation from 'src/app/modules/models/matriculation.model';
import Student from 'src/app/modules/models/student.model';
import { MatriculationService } from 'src/app/modules/services/matriculation.service';
import { StudentService } from 'src/app/modules/services/student.service';

@Component({
  selector: 'app-matriculation',
  templateUrl: './matriculation.component.html',
  styleUrls: ['./matriculation.component.scss'],
})
export class MatriculationComponent implements OnInit {
  public form!: FormGroup;
  public students: Student[] = [];
  // public matriculations: Matriculation[] = [];
  public matriculations: any[] = [];
  public selectedMatriculation!: Matriculation;
  public codigo = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });
  constructor(
    private router: Router,
    public studentService: StudentService,
    private fb: FormBuilder,
    public matriculationService: MatriculationService
  ) {
    this.form = this.fb.group({
      codigo: this.codigo,
    });
  }

  ngOnInit(): void {
    this.searchMatriculation();
    this.getStudent();
  }

  getStudent() {
    var request = '';
    this.studentService.consultar(request).subscribe((data: any) => {
      this.students = data;
    });
  }

  searchMatriculation() {
    var request = this.form.value.codigo;
    this.matriculationService.consultar(request).subscribe((response: any) => {
      this.matriculations = response;
    });
  }

  newMatriculation() {
    this.router.navigate(['/inscricao']);
  }

  onSelectionChange(matriculations: Matriculation) {
    this.selectedMatriculation = matriculations;
  }

  removeMatriculation() {
    let request = this.selectedMatriculation;
    this.matriculationService.remover(request).subscribe((response: any) => {
      alert(response['mensagem']);
      location.reload();
    });
  }
}
