import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeNegocioPage } from './home-negocio.page';

describe('HomeNegocioPage', () => {
  let component: HomeNegocioPage;
  let fixture: ComponentFixture<HomeNegocioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNegocioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
