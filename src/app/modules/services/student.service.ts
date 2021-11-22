import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Student from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  consultar(nome: string) {
    return this.http.get(
      'https://thingproxy.freeboard.io/fetch/https://stormy-badlands-29216.herokuapp.com/api/aluno/consultar/' +
        nome
    );
  }

  incluir(aluno: Student) {
    return this.http.post(
      'https://thingproxy.freeboard.io/fetch/https://stormy-badlands-29216.herokuapp.com/api/aluno/incluir',
      aluno
    );
  }

  alterar(aluno: Student) {
    return this.http.patch(
      'https://thingproxy.freeboard.io/fetch/https://stormy-badlands-29216.herokuapp.com/api/aluno/alterarparcial',
      aluno
    );
  }

  remover(aluno: Student) {
    return this.http.post(
      'https://thingproxy.freeboard.io/fetch/https://stormy-badlands-29216.herokuapp.com/api/aluno/remover',
      aluno
    );
  }
}
