import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { AnadirProductosComponent } from './anadir-productos.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AnadirProductosComponent', () => {
  let component: AnadirProductosComponent;
  let fixture: ComponentFixture<AnadirProductosComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
      RouterTestingModule],
      declarations: [ AnadirProductosComponent ]
    })
    .compileComponents();
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(AnadirProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
