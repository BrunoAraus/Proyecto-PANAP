import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmacionNegocioPage } from './confirmacion-negocio.page';

describe('ConfirmacionNegocioPage', () => {
  let component: ConfirmacionNegocioPage;
  let fixture: ComponentFixture<ConfirmacionNegocioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionNegocioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
