import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProductosService } from 'src/app/services/productos.service';

import { CatalogoComponent } from './catalogo.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CatalogoComponent', () => {
  let component: CatalogoComponent;
  let fixture: ComponentFixture<CatalogoComponent>;
  let service: ProductosService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, 
        RouterTestingModule],
      declarations: [ CatalogoComponent ],
      providers: [ProductosService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(ProductosService);
    fixture = TestBed.createComponent(CatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('productos vacios e inicializacion', () => {
    expect(component.products).toBeTruthy();
  });

  it('cuando se inicia los productos no están vacíos', () => {
    expect(component.ngOnInit).toBeTruthy();
    expect(component.products).not.toBeNull();
  });

  it('cuando se inicia los productos no están vacíos, y si se selecciona uno se dirige a la ruta para editar el producto', async() => {
    component.ngOnInit();
    let i = 0;
    for (let index = 0; index < component.products.length; index++) {
      const element = component.products[index];
      console.log(element._id);
      it('imprime', async() => {
        expect(component.selectedCard(element._id)).not.toBeNull();  
      });
      i++;
    }
  });

  it('accede a un producto definido en la base de datos', () => {
    component.ngOnInit();
    expect(component.products).toBeDefined();
    expect(component.selectedCard('627030365023e581f417ce1c')).not.toBeNull();
  });

});
