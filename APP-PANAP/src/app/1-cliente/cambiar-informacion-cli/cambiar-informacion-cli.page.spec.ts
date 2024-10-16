import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambiarInformacionCliPage } from './cambiar-informacion-cli.page';

describe('CambiarInformacionCliPage', () => {
  let component: CambiarInformacionCliPage;
  let fixture: ComponentFixture<CambiarInformacionCliPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarInformacionCliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
