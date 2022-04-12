import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { RegistroService } from './services/registro.service';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AutorizacionGuard implements CanActivate { //es una manera de proteger las rutas desde el frontend

  constructor(
    private registroservicio: RegistroService,
    private router: Router
  ) { }

  canActivate( ): boolean {
    if (this.registroservicio.iniciadosesion()) {
      return true;
    }

    this.router.navigate(['/signin']);
    return false;
  
  }
  
}
