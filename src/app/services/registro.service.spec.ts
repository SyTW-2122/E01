import { TestBed } from '@angular/core/testing';

import { RegistroService } from './registro.service';

describe('RegistroService', () => {
  let service: RegistroService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [RegistroService]});
    service = TestBed.inject(RegistroService);
  });

  it('pruebas', (done: DoneFn) => {
    let URL = 'http://localhost:3000/api';
    expect(service.getURL()).toEqual(URL);
  });

});
