import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CerrarSesionCliPage } from './cerrar-sesion-cli.page';

describe('CerrarSesionCliPage', () => {
  let component: CerrarSesionCliPage;
  let fixture: ComponentFixture<CerrarSesionCliPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CerrarSesionCliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
