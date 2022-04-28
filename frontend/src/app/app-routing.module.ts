import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProductosComponent} from './components/productos/productos.component'
import {MisproductosComponent} from './components/misproductos/misproductos.component'
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { AutorizacionGuard } from './autorizacion.guard';

//cada vez que visite una ruta estos componentes van a ser renderizados
//queremos que se muestre por defecto,'productos'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/productos',
    pathMatch: 'full' //exactamente nos redirecciona a esa ruta
  },
  {
    path: 'productos',
    component: ProductosComponent //renderizas el componente
  },
  {
    path: 'misproductos',
    component: MisproductosComponent,
    canActivate: [AutorizacionGuard]
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'catalogo',
    component: CatalogoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
