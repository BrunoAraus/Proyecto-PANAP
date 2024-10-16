import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuClientePage } from './menu-cliente.page';

describe('MenuClientePage', () => {
  let component: MenuClientePage;
  let fixture: ComponentFixture<MenuClientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
