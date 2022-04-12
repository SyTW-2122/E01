import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private URL: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  signUp(user: any): Observable<any> {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signIn(user: any): Observable<any> {
    return this.http.post<any>(this.URL + '/signin', user);
  }
 
  iniciadosesion(): Boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getURL(): string {
    return this.URL;
  }

}
