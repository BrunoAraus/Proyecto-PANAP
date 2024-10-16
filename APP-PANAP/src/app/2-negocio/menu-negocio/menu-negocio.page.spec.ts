import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuNegocioPage } from './menu-negocio.page';

describe('MenuNegocioPage', () => {
  let component: MenuNegocioPage;
  let fixture: ComponentFixture<MenuNegocioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNegocioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
