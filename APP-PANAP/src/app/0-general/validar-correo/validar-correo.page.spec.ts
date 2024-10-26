import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidarCorreoPage } from './validar-correo.page';

describe('ValidarCorreoPage', () => {
  let component: ValidarCorreoPage;
  let fixture: ComponentFixture<ValidarCorreoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarCorreoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
