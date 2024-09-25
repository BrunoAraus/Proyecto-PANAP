import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeNegocioPageRoutingModule } from './home-negocio-routing.module';

import { HomeNegocioPage } from './home-negocio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeNegocioPageRoutingModule
  ],
  declarations: [HomeNegocioPage]
})
export class HomeNegocioPageModule {}
