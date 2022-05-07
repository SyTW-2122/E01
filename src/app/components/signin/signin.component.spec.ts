import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { SigninComponent } from './signin.component';
import { RegistroService } from '../../services/registro.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let registro: RegistroService;
  let fixture: ComponentFixture<SigninComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
      RouterTestingModule,
      ReactiveFormsModule,
      FormsModule],
      declarations: [ SigninComponent ]
    })
    .compileComponents();
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('comprobar que la funcion signin hace alguna funcion', () => {
    registro = new RegistroService(httpClient);
    let signInComponent = new SigninComponent(registro, router);
    expect(signInComponent).toBeTruthy();
    expect(signInComponent.user).toBeDefined();
    expect(registro.signIn({email: "Yago", password: "1234"})).toBeDefined();
    //expect(signInComponent.signIn()).toBeTruthy();
  });
});
