import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SigninComponent } from './signin.component';
import { RegistroService } from '../../services/registro.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('comprobar que se inicia', () => {
    expect(component.ngOnInit).not.toBeNull();
  });

  it('comprobar que ha iniciado sesión', () => {
    component.ngOnInit();
    //console.log(component.user);
    component.user.email = "yago";
    component.user.password = "1234";
    expect(component.user).toEqual({email: "yago", password: "1234"});
    expect(component.user.email).toContain('yago');
    expect(component.user.password).toContain('1234');
    //expect(component.signIn()).toBeTruthy();
  });
});
