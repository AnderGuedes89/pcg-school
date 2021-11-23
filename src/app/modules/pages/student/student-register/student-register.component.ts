import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Student from 'src/app/modules/models/student.model';
import { StudentService } from 'src/app/modules/services/student.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.scss'],
})
export class StudentRegisterComponent implements OnInit {
  public form!: FormGroup;
  public studentName!: string;
  public studentData: Student[] = [];
  public name = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(255)],
    updateOn: 'blur',
  });
  public birthday = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(255)],
    updateOn: 'blur',
  });

  constructor(
    private fb: FormBuilder,
    public studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      name: this.name,
      birthday: this.birthday,
    });
  }

  public loadFormData() {
    this.form.patchValue({
      name: this.studentData[0].nome,
      birthday: this.studentData[0].dataNascimento,
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.studentName = params['id'];
      this.studentService
      .consultar(this.studentName)
      .subscribe((response: any) => {
        this.studentData = response;
        this.loadFormData();
      });
    });
  }

  newStudent() {
    var request = this.form.value;
    this.studentService.incluir(request).subscribe((data: any) => {
      alert(data['mensagem']);
      this.router.navigate(['/alunos']);
    });
  }

  changeStudent() {
    var request = this.form.value;
    this.studentService.alterar(request).subscribe((data: any) => {
      alert(data['mensagem']);
      this.router.navigate(['/alunos']);
    });
  }

  returnToStudent() {
    this.router.navigate(['/alunos']);
  }
}
