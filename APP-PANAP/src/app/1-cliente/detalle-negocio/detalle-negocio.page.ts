import { Component, Input } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-negocio',
  templateUrl: './detalle-negocio.page.html',
  styleUrls: ['./detalle-negocio.page.scss'],
})
export class DetalleNegocioPage {
  @Input() negocio: any;
  @Input() toggleRoute?: (marker: any, destino: { lat: number; lng: number }) => void;

  constructor(
    private modalCtrl: ModalController,
    private popoverController: PopoverController
  ) {}

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  cerrarPopover() {
    this.popoverController.dismiss();
  }

  iniciarRuta() {
    const destino = { lat: this.negocio.LATITUD, lng: this.negocio.LONGITUD };
    if (this.toggleRoute) {
      this.toggleRoute(this.negocio, destino);
    }
    this.cerrarModal();
    this.cerrarPopover();
  }
}
