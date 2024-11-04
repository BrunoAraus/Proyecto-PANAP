import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  constructor(
    private popoverController: PopoverController,
    private http: HttpClient,
  ) { }

  cerrarPopover() {
    this.popoverController.dismiss();
  }

  ngOnInit() {
  }

}
