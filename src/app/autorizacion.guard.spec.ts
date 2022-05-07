import { TestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import { Location } from "@angular/common";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AutorizacionGuard } from './autorizacion.guard';
import { RegistroService } from './services/registro.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { routes } from './app-routing.module'

describe('AutorizacionGuard', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let router: Router;
  let guard: AutorizacionGuard;
  let registroService: RegistroService;
  let location: Location;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes)]
    });
    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    registroService = TestBed.inject(RegistroService);
    httpTestingController = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router);
    guard = TestBed.inject(AutorizacionGuard);
    location = TestBed.inject(Location);
    router.initialNavigation();
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

  it('no debería iniciar sesión', fakeAsync(() => {
    router.navigate(['/home/Catalogo']);
    tick();
    registroService = new RegistroService(httpClient);
    guard = new AutorizacionGuard(registroService, router);
    expect(guard.canActivate()).toEqual(false);
    expect(location.path()).toBe('/signin');
  }));
});
