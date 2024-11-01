import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformacionNegocioFotoPage } from './informacion-negocio-foto.page';

describe('InformacionNegocioFotoPage', () => {
  let component: InformacionNegocioFotoPage;
  let fixture: ComponentFixture<InformacionNegocioFotoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionNegocioFotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
