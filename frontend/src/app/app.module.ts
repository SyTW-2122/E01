import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ProductosComponent } from './components/productos/productos.component';
import { MisproductosComponent } from './components/misproductos/misproductos.component';

import { AutorizacionGuard } from './autorizacion.guard';
import { TokenInterceptorService } from './services/token-interceptor.service'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ProductosComponent,
    MisproductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
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
