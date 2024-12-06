import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitudesNegocioPage } from './solicitudes-negocio.page';

describe('SolicitudesNegocioPage', () => {
  let component: SolicitudesNegocioPage;
  let fixture: ComponentFixture<SolicitudesNegocioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesNegocioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
