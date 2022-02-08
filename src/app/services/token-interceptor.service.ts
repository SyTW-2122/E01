import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistroService } from '../services/registro.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(
    private registro: RegistroService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) { //añade una cabecera en cada peticion
    const tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.registro.getToken()}`
      }
    })
    return next.handle(tokenizeReq);
  }

}
