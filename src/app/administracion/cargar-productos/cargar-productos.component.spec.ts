import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarProductosComponent } from './cargar-productos.component';

describe('CargarProductosComponent', () => {
  let component: CargarProductosComponent;
  let fixture: ComponentFixture<CargarProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
