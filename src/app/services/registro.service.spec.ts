import { inject, TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { RegistroService } from './registro.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, map, Observable, subscribeOn } from 'rxjs';



class HttpClientMock {
  get = jasmine.createSpy('httpClient.get');
  post = jasmine.createSpy('httpClient.post');
}
class StorageServiceMock {
  setItem = jasmine.createSpy('storageService.setItem');
  getItem = jasmine.createSpy('storageService.getItem');
}

describe('RegistroService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;  
  let httpClientMock: HttpClientMock;

  let service: RegistroService;
  let httpClientSpy: { post: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(RegistroService);

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new RegistroService(httpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Se crea un usuario', () => {
    expect(service.getToken()).toEqual(null);
  });

  it('Se crea un usuarioo', () => {
    let user: any = {
      email: "yago90@gmail.com",
      password: "1234"
    }
    let signUpF = spyOn(service, 'signUp');
    service.signUp(user);
    expect(signUpF).toHaveBeenCalled();
    expect(service.signUp(user)).toBeUndefined();


    // Make an HTTP GET request
    httpClient.post(`${service.getURL()}/signup`, user)
      .subscribe(data =>
        // When observable resolves, result should match test data
        expect(data).toEqual(user)
      );
  
  
    const req = httpTestingController.expectOne('http://localhost:3000/api/signup');
    expect(req.request.method).toEqual('POST');
    req.flush(user);
    httpTestingController.verify();
    
  });

  
});
