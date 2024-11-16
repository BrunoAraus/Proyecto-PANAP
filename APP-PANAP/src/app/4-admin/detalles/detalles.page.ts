import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {
  }

  cerrarPopover() {
    this.popoverController.dismiss();
  }

}
