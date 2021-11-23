import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Course from 'src/app/modules/models/course.model';
import { CourseService } from 'src/app/modules/services/course.service';

@Component({
  selector: 'app-course-register',
  templateUrl: './course-register.component.html',
  styleUrls: ['./course-register.component.scss'],
})
export class CourseRegisterComponent implements OnInit {
  public form!: FormGroup;
  public courseName!: string;
  public courseData: Course[] = [];
  public name = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(255)],
    updateOn: 'blur',
  });
  public instructor = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(255)],
    updateOn: 'blur',
  });
  public local = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(255)],
    updateOn: 'blur',
  });
  public workload = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(255)],
    updateOn: 'blur',
  });
  public startDate = this.fb.control('', {
    validators: [Validators.required, Validators.maxLength(255)],
    updateOn: 'blur',
  });

  constructor(
    private fb: FormBuilder,
    public courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      name: this.name,
      instructor: this.instructor,
      local: this.local,
      workload: this.workload,
      startDate: this.startDate,
    });
  }

  public loadFormData() {
    this.form.patchValue({
      name: this.courseData[0].nome,
      instructor: this.courseData[0].instrutor,
      local: this.courseData[0].local,
      workload: this.courseData[0].cargaHoraria,
      startDate: this.courseData[0].dataInicio,
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.courseName = params['id'];
      this.courseService
        .consultar(this.courseName)
        .subscribe((response: any) => {
          this.courseData = response;
          this.loadFormData();
        });
    });
  }

  newCourse() {
    var request = this.form.value;
    this.courseService.incluir(request).subscribe((data: any) => {
      alert(data['mensagem']);
      this.router.navigate(['/cursos']);
    });
  }

  changeCourse() {
    var request = this.form.value;
    this.courseService.alterar(request).subscribe((data: any) => {
      alert(data['mensagem']);
      this.router.navigate(['/cursos']);
    });
  }

  returnToCourses() {
    this.router.navigate(['/cursos']);
  }
}
