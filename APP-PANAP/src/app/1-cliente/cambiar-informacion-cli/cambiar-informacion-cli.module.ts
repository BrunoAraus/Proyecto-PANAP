import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarInformacionCliPageRoutingModule } from './cambiar-informacion-cli-routing.module';

import { CambiarInformacionCliPage } from './cambiar-informacion-cli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarInformacionCliPageRoutingModule
  ],
  declarations: [CambiarInformacionCliPage]
})
export class CambiarInformacionCliPageModule {}
