import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cerrar-sesion-neg',
  templateUrl: './cerrar-sesion-neg.page.html',
  styleUrls: ['./cerrar-sesion-neg.page.scss'],
})
export class CerrarSesionNegPage{
  constructor(private navCtrl: NavController) {}

  cerrarSesion() {
    
    localStorage.clear();


    this.navCtrl.navigateRoot('/home');
  }
}