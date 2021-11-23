import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterPageComponent } from './layouts/pages/master-page/master-page.component';
import { CourseRegisterComponent } from './modules/pages/course/course-register/course-register.component';
import { CourseComponent } from './modules/pages/course/course/course.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { MatriculationRegisterComponent } from './modules/pages/matriculation/matriculation-register/matriculation-register.component';
import { MatriculationComponent } from './modules/pages/matriculation/matriculation/matriculation.component';
import { StudentRegisterComponent } from './modules/pages/student/student-register/student-register.component';
import { StudentComponent } from './modules/pages/student/student/student.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'alunos', component: StudentComponent },
      { path: 'alunos/novo', component: StudentRegisterComponent },
      { path: 'alunos/alterar/:id', component: StudentRegisterComponent },
      { path: 'cursos', component: CourseComponent },
      { path: 'cursos/novo', component: CourseRegisterComponent },
      { path: 'cursos/alterar/:id', component: CourseRegisterComponent },
      { path: 'matriculas', component: MatriculationComponent },
      { path: 'inscricao', component: MatriculationRegisterComponent },
    ],
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
