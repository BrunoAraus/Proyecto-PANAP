import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidarCodigoContraPage } from './validar-codigo-contra.page';

describe('ValidarCodigoContraPage', () => {
  let component: ValidarCodigoContraPage;
  let fixture: ComponentFixture<ValidarCodigoContraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarCodigoContraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
