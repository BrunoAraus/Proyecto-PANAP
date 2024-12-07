import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
  @Input() negocio: any;
  errorMensaje: string = '';
  apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {
    console.log('Detalles del negocio:', this.negocio);
  }

  cambiarEstadoReserva(ID_NEGOCIO: string) {
    const body = {
      accion: 'APROVAR',
      ESTADO: 'ACEPTADO',
      ID_NEGOCIO: ID_NEGOCIO
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': ''
    });

    this.http.post(this.apiUrl, body, { headers: headers })
      .subscribe(
        (response: any) => {
          if (response.success) {
            this.navCtrl.navigateRoot('/tabs-admin/listado-negocios');
            console.log('Reserva aprobada para el negocio:', ID_NEGOCIO);
            this.cerrarPopover();
          } else {
            console.error('Error al aprobar la reserva:', response.message);
          }
        },
        (error) => {
          console.error('Error en la solicitud de aprobación:', error);
        }
      );
  }

  cerrarPopover() {
    this.popoverController.dismiss({
    });
  }
}
