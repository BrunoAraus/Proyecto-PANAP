import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CerrarSesionAdmPage } from './cerrar-sesion-adm.page';

describe('CerrarSesionAdmPage', () => {
  let component: CerrarSesionAdmPage;
  let fixture: ComponentFixture<CerrarSesionAdmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CerrarSesionAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
