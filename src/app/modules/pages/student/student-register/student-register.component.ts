import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/modules/services/student.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.scss'],
})
export class StudentRegisterComponent implements OnInit {
  public form!: FormGroup;
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
    private router: Router
  ) {
    this.form = this.fb.group({
      name: this.name,
      birthday: this.birthday,
    });
  }

  ngOnInit(): void {}

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
