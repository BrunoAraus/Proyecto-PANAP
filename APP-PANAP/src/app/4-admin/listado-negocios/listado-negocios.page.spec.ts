import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoNegociosPage } from './listado-negocios.page';

describe('ListadoNegociosPage', () => {
  let component: ListadoNegociosPage;
  let fixture: ComponentFixture<ListadoNegociosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoNegociosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
