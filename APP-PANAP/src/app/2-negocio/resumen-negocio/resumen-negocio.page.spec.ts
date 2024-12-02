import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumenNegocioPage } from './resumen-negocio.page';

describe('ResumenNegocioPage', () => {
  let component: ResumenNegocioPage;
  let fixture: ComponentFixture<ResumenNegocioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenNegocioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
