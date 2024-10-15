import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialReservasPage } from './historial-reservas.page';

describe('HistorialReservasPage', () => {
  let component: HistorialReservasPage;
  let fixture: ComponentFixture<HistorialReservasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialReservasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
