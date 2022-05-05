import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';

import { AutorizacionGuard } from './autorizacion.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { HomeComponent } from './components/home/home.component';
import { EditorCatalogoComponent } from './components/editor-catalogo/editor-catalogo.component';
import { AnadirProductosComponent } from './components/anadir-productos/anadir-productos.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    EditorCatalogoComponent,
    AnadirProductosComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    AutorizacionGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
