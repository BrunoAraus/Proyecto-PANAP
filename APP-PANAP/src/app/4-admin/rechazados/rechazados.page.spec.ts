import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RechazadosPage } from './rechazados.page';

describe('RechazadosPage', () => {
  let component: RechazadosPage;
  let fixture: ComponentFixture<RechazadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RechazadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
