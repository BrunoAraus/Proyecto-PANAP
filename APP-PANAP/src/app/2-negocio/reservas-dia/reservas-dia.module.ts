import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservasDiaPageRoutingModule } from './reservas-dia-routing.module';

import { ReservasDiaPage } from './reservas-dia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservasDiaPageRoutingModule
  ],
  declarations: [ReservasDiaPage]
})
export class ReservasDiaPageModule {}
