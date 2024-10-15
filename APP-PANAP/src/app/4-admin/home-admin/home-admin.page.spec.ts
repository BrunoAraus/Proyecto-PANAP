import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeAdminPage } from './home-admin.page';

describe('HomeAdminPage', () => {
  let component: HomeAdminPage;
  let fixture: ComponentFixture<HomeAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
