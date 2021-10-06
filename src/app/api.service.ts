import { Injectable } from '@angular/core';
/* Libraries */
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '**'
    })
  }

  constructor(private http: HttpClient) { }

  direccion = "https://jsonplaceholder.typicode.com/posts";

  //permite recuperar todos los registros
  getPosts(): Observable<any> {
    return this.http.get(this.direccion).pipe(retry(3));
  }
  //permite recuperar sólo un registro
  getPost(id): Observable<any> {
    return this.http.get(this.direccion + '/' + id).pipe(retry(3));
  }
  //método que permite recuperar el valor del bitcoin
  getBitcoin(): Observable<any> {
    return this.http.get('https://mindicador.cl/api/bitcoin').pipe(retry(3));
  }
  //método que permite almacenar/inyectar
  crearPost(post): Observable<any> {
    return this.http.post(this.direccion, post, this.httpOptions).pipe(retry(3));
  }
  //método para actualizar registro
  updatePost(id, post): Observable<any> {
    return this.http.put(this.direccion + '/' + id, post, this.httpOptions).pipe(retry(2));
  }
  //método para eliminar registro
  deletePost(id): Observable<any> {
    return this.http.delete(this.direccion + '/' + id, this.httpOptions).pipe(retry(2));
  }

}
