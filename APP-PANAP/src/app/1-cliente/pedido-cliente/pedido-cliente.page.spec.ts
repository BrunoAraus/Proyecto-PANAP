import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidoClientePage } from './pedido-cliente.page';

describe('PedidoClientePage', () => {
  let component: PedidoClientePage;
  let fixture: ComponentFixture<PedidoClientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
