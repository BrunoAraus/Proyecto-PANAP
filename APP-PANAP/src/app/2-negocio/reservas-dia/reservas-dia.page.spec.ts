import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservasDiaPage } from './reservas-dia.page';

describe('ReservasDiaPage', () => {
  let component: ReservasDiaPage;
  let fixture: ComponentFixture<ReservasDiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasDiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
