import { TestBed, async, fakeAsync, tick, inject, flush } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { RegistroService } from './registro.service';

describe('RegistroService', () => {
  let service: RegistroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [RegistroService],
    });
    service = TestBed.inject(RegistroService);
    let user = {
      email: "yaguets",
      password: "1234",
    }
    service.signIn(user);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('comprueba los parámetros', () => {
    let URI: string = 'http://localhost:3000/api';
    expect(service.getURL()).toEqual(URI);
  });

  it('se crea un usuario', async(() => {
    let user = {
      email: "yaguets",
      password: "1234",
    }
    service.signUp(user).subscribe(
      (response) => expect(response.json).not.toBeNull(),
    )
  }));

  it('inicia sesion con un usuario', async(() => {
    let user = {
      email: "yaguets",
      password: "1234",
    }
    service.signIn(user).subscribe(
      (response) => expect(response.json).not.toBeNull(),
    )
  }));

  it('Como el token se establece en el componente y no en el servicio, entonces devolvera falso, aunque realmente haya respuesta del servidor', fakeAsync(() => {
    expect(service.signIn({
      email: "yaguets",
      password: "1234",
    })).toBeTruthy();
    flush();
    tick(1000);
    expect(service.getToken()).not.toBeNull();
  }));

});
