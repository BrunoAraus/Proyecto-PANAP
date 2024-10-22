import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-negocio',
  templateUrl: './detalle-negocio.page.html',
  styleUrls: ['./detalle-negocio.page.scss'],
})
export class DetalleNegocioPage {
  @Input() negocio: any;
  @Input() toggleRoute?: (marker: any, destino: { lat: number; lng: number }) => void;
  constructor(private modalCtrl: ModalController) {}

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  iniciarRuta() {
    const destino = { lat: this.negocio.LATITUD, lng: this.negocio.LONGITUD };
    if (this.toggleRoute) {
      this.toggleRoute(this.negocio, destino);
    }
    this.cerrarModal();
  }
}
