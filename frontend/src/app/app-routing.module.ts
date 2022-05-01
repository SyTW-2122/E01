import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnadirProductosComponent } from './components/anadir-productos/anadir-productos.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { EditorCatalogoComponent } from './components/editor-catalogo/editor-catalogo.component';
import { AutorizacionGuard } from './autorizacion.guard';
import { HomeComponent } from './components/home/home.component';

//cada vez que visite una ruta estos componentes van a ser renderizados
//queremos que se muestre por defecto,'productos'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full' //exactamente nos redirecciona a esa ruta
  },
  {
    path: 'home',
    component: HomeComponent //renderizas el componente
  },
  {
    path: 'anadirProductos',
    component: AnadirProductosComponent,
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
    path: 'editorCatalogo',
    component: EditorCatalogoComponent,
    canActivate: [AutorizacionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
