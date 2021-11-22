import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Matriculation from '../models/matriculation.model';

@Injectable({
  providedIn: 'root',
})
export class MatriculationService {
  constructor(private http: HttpClient) {}

  consultar(codigoAluno: string) {
    return this.http.get(
      'https://thingproxy.freeboard.io/fetch/https://stormy-badlands-29216.herokuapp.com/api/matricula/consultar/' +
        codigoAluno
    );
  }

  incluir(matricula: Matriculation) {
    return this.http.post(
      'https://thingproxy.freeboard.io/fetch/https://stormy-badlands-29216.herokuapp.com/api/matricula/incluir',
      matricula
    );
  }

  remover(matricula: Matriculation) {
    return this.http.post(
      'https://thingproxy.freeboard.io/fetch/https://stormy-badlands-29216.herokuapp.com/api/matricula/remover',
      matricula
    );
  }
}
