import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
  @Input() detallesReserva: any;
  errorMensaje: string = '';
  apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';



  constructor( 
    private http: HttpClient,
    private navCtrl: NavController,
    private popoverController: PopoverController){}
  


  ngOnInit() {
    console.log('Detalles de la reserva:', this.detallesReserva);
  }

  cambiarEstadoReserva(idUsuario: string) {
    const body = {
      accion: 'ESTADO',
      ID_USUARIO: idUsuario,
      ESTADO: 'ACEPTADO'
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': ''
    });

    this.http.post(this.apiUrl, body, { headers: headers })
      .subscribe(
        (response: any) => {
          if (response.success) {
            console.log('Estado cambiado a ACEPTADO para el usuario:', idUsuario);
            this.navCtrl.navigateRoot('/tabs-negocio/reservas-dia');
            this.cerrarPopover();
          } else {
            console.error('Error al cambiar el estado:', response.message);
          }
        },
        (error) => {
          console.error('Error en la solicitud:', error);
        }
      );
  }

  cancelarReserva(idUsuario: string, idReservas: string) {
    const body = {
      accion: 'CANCELAR',
      ID_USUARIO: idUsuario,
      ID_RESERVAS: idReservas
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': ''
    });

    this.http.post(this.apiUrl, body, { headers: headers })
      .subscribe(
        (response: any) => {
          if (response.success) {
            console.log('Reserva cancelada para el usuario:', idUsuario);
            this.navCtrl.navigateRoot('/tabs-negocio/reservas-dia');
            this.cerrarPopover();
          } else {
            console.error('Error al cancelar la reserva:', response.message);
          }
        },
        (error) => {
          console.error('Error en la solicitud de cancelación:', error);
        }
      );
  }
  cerrarPopover() {
    this.popoverController.dismiss();
  }

  formatearNumero(numero: number): string {
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
}
