import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PruebasApiPage } from './pruebas-api.page';

describe('PruebasApiPage', () => {
  let component: PruebasApiPage;
  let fixture: ComponentFixture<PruebasApiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebasApiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
