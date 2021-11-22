import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Course from 'src/app/modules/models/course.model';
import Matriculation from 'src/app/modules/models/matriculation.model';
import Student from 'src/app/modules/models/student.model';
import { CourseService } from 'src/app/modules/services/course.service';
import { MatriculationService } from 'src/app/modules/services/matriculation.service';
import { StudentService } from 'src/app/modules/services/student.service';

@Component({
  selector: 'app-matriculation-register',
  templateUrl: './matriculation-register.component.html',
  styleUrls: ['./matriculation-register.component.scss'],
})
export class MatriculationRegisterComponent implements OnInit {
  public form!: FormGroup;
  public courses: Course[] = [];
  public students: Student[] = [];
  // public matriculations: Matriculation[] = [];
  public matriculations: any[] = [];
  public course = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(255)],
    updateOn: 'blur',
  });
  public matriculationDate = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(255)],
    updateOn: 'blur',
  });

  constructor(
    private fb: FormBuilder,
    public matriculationService: MatriculationService,
    public courseService: CourseService,
    public studentService: StudentService,
    private router: Router
  ) {
    this.form = this.fb.group({
      course: this.course,
      matriculationDate: this.matriculationDate,
    });
  }

  ngOnInit(): void {
    this.getCourses();
    this.getStudent();
    this.getMatriculation();
  }

  getCourses() {
    var request = '';
    this.courseService.consultar(request).subscribe((data: any) => {
      this.courses = data;
    });
  }

  getStudent() {
    var request = '';
    this.studentService.consultar(request).subscribe((data: any) => {
      this.students = data;
    });
  }

  getMatriculation() {
    var request = '';
    this.matriculationService.consultar(request).subscribe((response: any) => {
      this.matriculations = response;
      console.log(response);
    });
  }

  newMatriculation() {
    var request = this.form.value;
    this.matriculationService.incluir(request).subscribe((data: any) => {
      alert(data['mensagem']);
      this.router.navigate(['/matriculas']);
    });
  }

  returnToMatriculation() {
    this.router.navigate(['/matriculas']);
  }
}
