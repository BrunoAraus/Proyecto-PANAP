import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroNegocioPage } from './registro-negocio.page';

describe('RegistroNegocioPage', () => {
  let component: RegistroNegocioPage;
  let fixture: ComponentFixture<RegistroNegocioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroNegocioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
