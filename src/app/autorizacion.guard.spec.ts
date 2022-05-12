import { ComponentFixture, TestBed, fakeAsync, tick, inject, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RegistroService } from './services/registro.service';

import { AutorizacionGuard } from './autorizacion.guard';
import { SigninComponent } from './components/signin/signin.component';

import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from "@angular/common";

import { routes } from './app-routing.module'

describe('AutorizacionGuard', () => {
  let guard: AutorizacionGuard;
  let service: RegistroService;
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,
        RouterTestingModule.withRoutes(routes)],
      declarations: [SigninComponent],
      providers: [RegistroService]
    });
    guard = TestBed.inject(AutorizacionGuard);
    service = TestBed.inject(RegistroService); 
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();

    service.signIn({email: "yago", password: "1234"});

    let email: string = "yago";
    let password: string = "1234";
    component.user.email = email;
    component.user.password = password;

    component.signIn();

  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it("fakeAsync works", fakeAsync(() => {
    let promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('no debería iniciar sesión', async(() => {
    service.signIn({email: "yago", password: "1234"});

    let email: string = "yago";
    let password: string = "1234";
    component.user.email = email;
    component.user.password = password;

    component.signIn();
    router.navigate(['/home/Catalogo']);
    setTimeout(() => {
      expect(location.path()).toBe('/home/Catalogo');
    }, 2000);

  }));

  it('deberia haber iniciado sesion', fakeAsync(() => {
    if (localStorage.getItem('token')) {
      router.navigate(['/home/Catalogo']);
      tick(2500);
      expect(guard.canActivate()).toEqual(true);
      tick(2500);
      expect(location.path()).toBe('/home/Catalogo');
    }
  }));

  it('si se elimina el token vuelve a tener que iniciar sesion', async(() => {
    localStorage.removeItem('token');
    router.navigate(['/home/Catalogo']);
    expect(guard.canActivate()).toEqual(false);
    setTimeout(() => {
      expect(location.path()).toBe('/signin');
    }, 2000);
    // expect(location.path()).toBe('/signin');
  }));

});
