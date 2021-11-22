import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Course from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  consultar(nome: string) {
    return this.http.get(
      'https://thingproxy.freeboard.io/fetch/https://stormy-badlands-29216.herokuapp.com/api/curso/consultar/' +
        nome
    );
  }

  incluir(curso: Course) {
    return this.http.post(
      'https://thingproxy.freeboard.io/fetch/https://stormy-badlands-29216.herokuapp.com/api/curso/incluir',
      curso
    );
  }

  alterar(curso: Course) {
    return this.http.patch(
      'https://thingproxy.freeboard.io/fetch/https://stormy-badlands-29216.herokuapp.com/api/curso/alterarparcial',
      curso
    );
  }

  remover(curso: Course) {
    return this.http.post(
      'https://thingproxy.freeboard.io/fetch/https://stormy-badlands-29216.herokuapp.com/api/curso/remover',
      curso
    );
  }
}
