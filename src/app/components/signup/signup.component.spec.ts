import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { RegistroService } from '../../services/registro.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

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
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('comprobar que se inicia', () => {
    expect(component.ngOnInit).not.toBeNull();
  });

  it('comprobar que se ha registrado', () => {
    component.user.email = "yago";
    component.user.password = "1234";
    expect(component.user).toEqual({email: "yago", password: "1234"});
    expect(component.user.email).toContain('yago');
    expect(component.user.password).toContain('1234');
    expect(component.signUp()).toBeTruthy();
  });
});
