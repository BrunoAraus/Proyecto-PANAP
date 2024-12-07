import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cerrar-sesion-adm',
  templateUrl: './cerrar-sesion-adm.page.html',
  styleUrls: ['./cerrar-sesion-adm.page.scss'],
})
export class CerrarSesionAdmPage {

  constructor(private navCtrl: NavController) { }

  cerrarSesion() {
    localStorage.clear();
    this.navCtrl.navigateRoot('/home');
  }

  noCerrarSesion() {
    this.navCtrl.navigateRoot('/tabs-admin/home-admin');
  }

}
