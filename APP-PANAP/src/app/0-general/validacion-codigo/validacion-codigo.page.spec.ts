import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidacionCodigoPage } from './validacion-codigo.page';

describe('ValidacionCodigoPage', () => {
  let component: ValidacionCodigoPage;
  let fixture: ComponentFixture<ValidacionCodigoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidacionCodigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
