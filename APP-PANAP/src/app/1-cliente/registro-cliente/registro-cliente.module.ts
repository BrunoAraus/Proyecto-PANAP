import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroClientePageRoutingModule } from './registro-cliente-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { RegistroClientePage } from './registro-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroClientePageRoutingModule,
    HttpClientModule 
  ],
  declarations: [RegistroClientePage]
})
export class RegistroClientePageModule {}
