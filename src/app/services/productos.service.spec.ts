// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

// Other imports
import { async, TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ProductosService } from './productos.service';
import { product } from '../interfaces/product';

describe('ProductosService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductosService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductosService]
    });
    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('comprobar si la funcion crear un producto esta definida', () => {
    service = new ProductosService(httpClient);
    expect(service).toBeTruthy();

    let title = "zanahoria";
    let price = "1 euro";
    let description = "zanahorias frescas";
    let imagePath: File;

    expect(service.createProduct(title, price, description, imagePath)).toBeDefined();
  });

  it('comprobar si la funcion obtiene productos esta definida', () => {
    service = new ProductosService(httpClient);
    expect(service).toBeTruthy();

    expect(service.getProducts()).toBeTruthy();
    expect(service.getProducts()).toBeDefined();
  });

  it('comprobar si la funcion obtiene un producto esta definida', () => {
    service = new ProductosService(httpClient);
    expect(service).toBeTruthy();

    expect(service.getProduct("1112")).toBeTruthy();
  });

  it('comprobar si la funcion actualizar un producto esta definida', () => {
    service = new ProductosService(httpClient);
    expect(service).toBeTruthy();

    let title = "zanahoria";
    let price = "3 euro";
    let description = "zanahorias frescas";
    let imagePath: File;

    expect(service.updateProduct('1112',title, price, description)).toBeDefined();
  });

  it('comprobar si la funcion elimina un producto esta definida', () => {
    service = new ProductosService(httpClient);
    expect(service.deleteProduct("1112")).toBeTruthy();
  });

});
