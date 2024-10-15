import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AceptadosPage } from './aceptados.page';

describe('AceptadosPage', () => {
  let component: AceptadosPage;
  let fixture: ComponentFixture<AceptadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AceptadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
