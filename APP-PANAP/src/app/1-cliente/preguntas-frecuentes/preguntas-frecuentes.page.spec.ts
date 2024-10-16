import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreguntasFrecuentesPage } from './preguntas-frecuentes.page';

describe('PreguntasFrecuentesPage', () => {
  let component: PreguntasFrecuentesPage;
  let fixture: ComponentFixture<PreguntasFrecuentesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntasFrecuentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
