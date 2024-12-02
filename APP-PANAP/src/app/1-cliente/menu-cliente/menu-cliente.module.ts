import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuClientePageRoutingModule } from './menu-cliente-routing.module';

import { MenuClientePage } from './menu-cliente.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuClientePageRoutingModule,
    HttpClientModule
  ],
  declarations: [MenuClientePage]
})
export class MenuClientePageModule {}
