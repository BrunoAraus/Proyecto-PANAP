import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestablecerContraPage } from './restablecer-contra.page';

describe('RestablecerContraPage', () => {
  let component: RestablecerContraPage;
  let fixture: ComponentFixture<RestablecerContraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RestablecerContraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
