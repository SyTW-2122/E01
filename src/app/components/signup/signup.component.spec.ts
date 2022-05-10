import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { RegistroService } from '../../services/registro.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
/*
describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, 
      RouterTestingModule], 
      declarations: [ SignupComponent ],
      providers: [RegistroService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
    console.log(component.user);
    component.user.email = "Sara";
    component.user.password = "contraseña";
    component.signUp();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('comprobar que se inicia', () => {
    expect(component.ngOnInit).not.toBeNull();
  });

  it('comprobar que se ha registrado', () => {
    expect(component.user).toEqual({email: "Sara", password: "contraseña"});
    expect(component.user.email).toContain('Sara');
    expect(component.user.password).toContain('contraseña');
    expect(component.signUp()).toBeTruthy();
  });
});
*/