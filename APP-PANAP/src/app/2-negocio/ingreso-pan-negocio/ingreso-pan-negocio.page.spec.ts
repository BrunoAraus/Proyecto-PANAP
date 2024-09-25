import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresoPanNegocioPage } from './ingreso-pan-negocio.page';

describe('IngresoPanNegocioPage', () => {
  let component: IngresoPanNegocioPage;
  let fixture: ComponentFixture<IngresoPanNegocioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoPanNegocioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
