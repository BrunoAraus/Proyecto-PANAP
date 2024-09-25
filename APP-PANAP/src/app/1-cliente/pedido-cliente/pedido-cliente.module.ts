import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoClientePageRoutingModule } from './pedido-cliente-routing.module';

import { PedidoClientePage } from './pedido-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoClientePageRoutingModule
  ],
  declarations: [PedidoClientePage]
})
export class PedidoClientePageModule {}
