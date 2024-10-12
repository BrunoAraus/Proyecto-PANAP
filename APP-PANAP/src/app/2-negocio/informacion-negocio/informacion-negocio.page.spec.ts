import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformacionNegocioPage } from './informacion-negocio.page';

describe('InformacionNegocioPage', () => {
  let component: InformacionNegocioPage;
  let fixture: ComponentFixture<InformacionNegocioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionNegocioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
