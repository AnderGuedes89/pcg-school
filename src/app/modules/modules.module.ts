import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CourseRegisterComponent } from './pages/course/course-register/course-register.component';
import { CourseComponent } from './pages/course/course/course.component';
import { MatriculationRegisterComponent } from './pages/matriculation/matriculation-register/matriculation-register.component';
import { MatriculationComponent } from './pages/matriculation/matriculation/matriculation.component';
import { StudentRegisterComponent } from './pages/student/student-register/student-register.component';
import { StudentComponent } from './pages/student/student/student.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    StudentComponent,
    CourseComponent,
    MatriculationComponent,
    HomeComponent,
    StudentRegisterComponent,
    MatriculationRegisterComponent,
    CourseRegisterComponent,
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    NgxMaskModule.forChild(),
  ],
})
export class ModulesModule {}
