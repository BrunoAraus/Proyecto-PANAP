import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeClientePage } from './home-cliente.page';

describe('HomeClientePage', () => {
  let component: HomeClientePage;
  let fixture: ComponentFixture<HomeClientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
