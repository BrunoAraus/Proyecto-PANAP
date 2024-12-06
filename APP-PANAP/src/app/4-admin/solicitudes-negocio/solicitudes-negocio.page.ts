import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular/standalone';
// import { DetallesPage } from '../detalles/detalles.page';

@Component({
  selector: 'app-solicitudes-negocio',
  templateUrl: './solicitudes-negocio.page.html',
  styleUrls: ['./solicitudes-negocio.page.scss'],
})
export class SolicitudesNegocioPage implements OnInit {

  constructor(
    // private http: HttpClient, 
    // private navCtrl: NavController,
    // private popoverController: PopoverController
  ) { }

  ngOnInit() {
  }

  // async presentPopover(negocio: any) {
  //   const popover = await this.popoverController.create({
  //     component: DetallesPage,
  //     componentProps: {
  //       // id_reserva: reserva.ID_RESERVAS,
  //       // detallesReserva: reserva
  //     },
  //     translucent: true,
  //     cssClass: 'custom-popover-css4'
  //   });
  
  //   await popover.present();
  
  //   const { data } = await popover.onWillDismiss();
  //   console.log('Popover cerrado: ', data);
    
  //   // Funcionalidades al cargar la page:
  //   // this.reconectar();
  //   // this.cargarDatos();
  // }

}
