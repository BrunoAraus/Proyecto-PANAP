import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-confirmacion-negocio',
  templateUrl: './confirmacion-negocio.page.html',
  styleUrls: ['./confirmacion-negocio.page.scss'],
})
export class ConfirmacionNegocioPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  irHome() {
    this.navCtrl.navigateRoot('/home');
  }

}
