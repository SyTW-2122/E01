import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { SignupComponent } from './signup.component';
import { RegistroService } from '../../services/registro.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let registro: RegistroService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule],
    })
    .compileComponents();
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('comprobar que la funcion signup hace alguna funcion', () => {
    registro = new RegistroService(httpClient);
    let signUpComponent = new SignupComponent(registro, router);
    expect(signUpComponent).toBeTruthy();
    expect(signUpComponent.user).toBeDefined();
    expect(registro.signUp({email: "Yagor", password: "1234"})).toBeDefined();
  });
});
