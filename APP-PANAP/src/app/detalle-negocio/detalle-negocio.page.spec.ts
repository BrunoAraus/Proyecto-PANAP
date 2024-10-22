import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleNegocioPage } from './detalle-negocio.page';

describe('DetalleNegocioPage', () => {
  let component: DetalleNegocioPage;
  let fixture: ComponentFixture<DetalleNegocioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleNegocioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
