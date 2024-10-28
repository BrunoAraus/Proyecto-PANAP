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
    private popoverController: PopoverController,
  ) {}

  cerrarPopover() {
    this.popoverController.dismiss();
  }

  iniciarRuta() {
    const latitud = parseFloat(this.negocio.LATITUD);
    const longitud = parseFloat(this.negocio.LONGITUD);
    
    const destino = { lat: latitud, lng: longitud };
    
    if (this.toggleRoute) {
      this.toggleRoute(this.negocio, destino);
    }
    
    this.cerrarPopover();
  }
}  