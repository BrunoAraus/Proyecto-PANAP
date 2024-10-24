import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservasDiaPageRoutingModule } from './reservas-dia-routing.module';

import { ReservasDiaPage } from './reservas-dia.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservasDiaPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ReservasDiaPage]
})
export class ReservasDiaPageModule {}
