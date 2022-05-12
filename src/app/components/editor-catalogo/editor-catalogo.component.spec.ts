import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditorCatalogoComponent } from './editor-catalogo.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditorCatalogoComponent', () => {
  let component: EditorCatalogoComponent;
  let fixture: ComponentFixture<EditorCatalogoComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, 
      RouterTestingModule],
      declarations: [ EditorCatalogoComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(EditorCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('comprobar que se inicia', () => {
    expect(component.ngOnInit).not.toBeNull();
    expect(component.id).not.toBeNull();
    expect(component.product_).not.toBeNull();
  });

});
