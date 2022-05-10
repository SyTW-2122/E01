import { ComponentFixture, TestBed } from '@angular/core/testing';
import { async, fakeAsync, tick, inject } from '@angular/core/testing';
import { SigninComponent } from './signin.component';
import { RegistroService } from '../../services/registro.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
/*
describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, 
      RouterTestingModule], 
      declarations: [ SigninComponent ],
      providers: [RegistroService]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
    console.log(component.user);
    component.user.email = "Sara";
    component.user.password = "contraseña";
    expect(component.user).toEqual({email: "Sara", password: "contraseña"});
    expect(component.user.email).toContain('Sara');
    expect(component.user.password).toContain('contraseña');
    component.signIn();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
    console.log(component.user);
    component.user.email = "Sara";
    component.user.password = "contraseña";
    expect(component.user).toEqual({email: "Sara", password: "contraseña"});
    expect(component.user.email).toContain('Sara');
    expect(component.user.password).toContain('contraseña');
    component.signIn();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('comprobar que se inicia', () => {
    expect(component.ngOnInit).not.toBeNull();
  });

  it('comprobar que se ha registrado', () => {
    component.ngOnInit();
    console.log(component.user);
    component.user.email = "Sara";
    component.user.password = "contraseña";
    expect(component.user).toEqual({email: "Sara", password: "contraseña"});
    expect(component.user.email).toContain('Sara');
    expect(component.user.password).toContain('contraseña');
    component.signIn();
  });
});
*/