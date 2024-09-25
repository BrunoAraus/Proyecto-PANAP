import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CerrarSesionNegPage } from './cerrar-sesion-neg.page';

describe('CerrarSesionNegPage', () => {
  let component: CerrarSesionNegPage;
  let fixture: ComponentFixture<CerrarSesionNegPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CerrarSesionNegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
