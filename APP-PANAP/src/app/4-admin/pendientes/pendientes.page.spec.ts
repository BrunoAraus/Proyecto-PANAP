import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PendientesPage } from './pendientes.page';

describe('PendientesPage', () => {
  let component: PendientesPage;
  let fixture: ComponentFixture<PendientesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PendientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
