import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Course from 'src/app/modules/models/course.model';
import { CourseService } from 'src/app/modules/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];
  selectedCourse!: Course;
  public form!: FormGroup;
  public name = this.fb.control('', {
    validators: [Validators.maxLength(255)],
    updateOn: 'blur',
  });

  constructor(
    public courseService: CourseService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: this.name,
    });
  }

  ngOnInit(): void {
    this.searchCourse();
  }

  searchCourse() {
    var request = this.form.value.name;
    this.courseService.consultar(request).subscribe((response: any) => {
      this.courses = response;
    });
  }

  newCourse() {
    this.router.navigate(['/cursos/novo']);
  }

  onSelectionChange(course: Course) {
    this.selectedCourse = course;
  }
}
