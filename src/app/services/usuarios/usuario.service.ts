import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  endpoint = 'http://localhost:3000/v2/';
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http:HttpClient) { }

  private extractData(res){
    let body = res;
    return body || [] || {};
  }

  login(correo):Observable<any>{
    return this.http.post(this.endpoint + 'login', {correo: correo}, this.httpOptions).pipe(map(this.extractData));
  }

  searchContacts(id){
    return this.http.post(this.endpoint + 'searchContacts', {id: id}, this.httpOptions).pipe(map(this.extractData));
  }

}
