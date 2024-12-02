import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumenClientePage } from './resumen-cliente.page';

describe('ResumenClientePage', () => {
  let component: ResumenClientePage;
  let fixture: ComponentFixture<ResumenClientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
