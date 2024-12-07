import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cerrar-sesion-cli',
  templateUrl: './cerrar-sesion-cli.page.html',
  styleUrls: ['./cerrar-sesion-cli.page.scss'],
})
export class CerrarSesionCliPage {
  constructor(private navCtrl: NavController) {}

  cerrarSesion() {
    localStorage.clear();
    this.navCtrl.navigateRoot('/home');
  }

  noCerrarSesion() {
    this.navCtrl.navigateRoot('/tabs-cliente/home-cliente');
  }
}
