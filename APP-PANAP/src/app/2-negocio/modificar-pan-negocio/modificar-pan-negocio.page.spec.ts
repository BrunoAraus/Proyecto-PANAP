import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarPanNegocioPage } from './modificar-pan-negocio.page';

describe('ModificarPanNegocioPage', () => {
  let component: ModificarPanNegocioPage;
  let fixture: ComponentFixture<ModificarPanNegocioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPanNegocioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
