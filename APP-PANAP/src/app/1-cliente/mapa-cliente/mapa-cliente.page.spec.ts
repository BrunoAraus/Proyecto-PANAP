import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapaClientePage } from './mapa-cliente.page';

describe('MapaClientePage', () => {
  let component: MapaClientePage;
  let fixture: ComponentFixture<MapaClientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
