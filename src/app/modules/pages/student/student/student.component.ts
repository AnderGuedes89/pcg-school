import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Student from 'src/app/modules/models/student.model';
import { StudentService } from 'src/app/modules/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  public students: Student[] = [];
  public selectedStudent!: Student;
  public form!: FormGroup;
  public name = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });

  constructor(
    public studentService: StudentService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: this.name,
    });
  }

  ngOnInit(): void {
    this.searchStudent();
  }

  searchStudent() {
    var request = this.form.value.name;
    this.studentService.consultar(request).subscribe((response: any) => {
      this.students = response;
    });
  }

  newStudent() {
    this.router.navigate(['/alunos/novo']);
  }

  onSelectionChange(student: Student) {
    this.selectedStudent = student;
  }

  changeStudent() {
    let selected = this.selectedStudent;
    if (selected) {
      this.router.navigate(['/alunos/alterar/', selected.nome]);
    } else {
      alert('Selecione um aluno');
    }
  }

  removeStudent() {
    let request = this.selectedStudent;
    this.studentService.remover(request).subscribe((response: any) => {
      alert(response['mensagem']);
      location.reload();
    });
  }
}
