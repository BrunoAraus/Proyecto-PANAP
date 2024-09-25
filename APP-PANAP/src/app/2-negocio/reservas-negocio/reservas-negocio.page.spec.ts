import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservasNegocioPage } from './reservas-negocio.page';

describe('ReservasNegocioPage', () => {
  let component: ReservasNegocioPage;
  let fixture: ComponentFixture<ReservasNegocioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasNegocioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
