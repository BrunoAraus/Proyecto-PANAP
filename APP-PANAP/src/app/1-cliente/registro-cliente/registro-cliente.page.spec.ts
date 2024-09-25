import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroClientePage } from './registro-cliente.page';

describe('RegistroClientePage', () => {
  let component: RegistroClientePage;
  let fixture: ComponentFixture<RegistroClientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
