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
  mostrarAnimacion = false;
  animacionSalida = false;
  tipoAnimacion: 'entregado' | 'rechazado' = 'entregado';

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
          if (response.success || response.status === 200) {
            this.tipoAnimacion = 'entregado';
            this.mostrarAnimacion = true;
            this.animacionSalida = false;
            
            setTimeout(() => {
              this.navCtrl.navigateRoot('/tabs-negocio/reservas-dia');
              this.cerrarPopover();
            }, 1500);
            
            setTimeout(() => {
              this.animacionSalida = true;
              setTimeout(() => {
                this.mostrarAnimacion = false;
                this.animacionSalida = false;
                this.navCtrl.navigateRoot('/tabs-negocio/reservas-dia');
              }, 1000);
            }, 3000);
          }
        },
        (error) => {
          if (error.status === 200) {
            this.tipoAnimacion = 'entregado';
            this.mostrarAnimacion = true;
            this.animacionSalida = false;
            
            setTimeout(() => {
              this.navCtrl.navigateRoot('/tabs-negocio/reservas-dia');
              this.cerrarPopover();
            }, 1500);
            
            setTimeout(() => {
              this.animacionSalida = true;
              setTimeout(() => {
                this.mostrarAnimacion = false;
                this.animacionSalida = false;
                this.navCtrl.navigateRoot('/tabs-negocio/reservas-dia');
              }, 1000);
            }, 3000);
          } else {
            console.error('Error en la solicitud:', error);
          }
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
          if (response.success || response.status === 200) {
            this.tipoAnimacion = 'rechazado';
            this.mostrarAnimacion = true;
            this.animacionSalida = false;
            
            setTimeout(() => {
              this.navCtrl.navigateRoot('/tabs-negocio/reservas-dia');
              this.cerrarPopover();
            }, 2000);
            
            setTimeout(() => {
              this.animacionSalida = true;
              setTimeout(() => {
                this.mostrarAnimacion = false;
                this.animacionSalida = false;
                this.navCtrl.navigateRoot('/tabs-negocio/reservas-dia');
              }, 1000);
            }, 3000);
          }
        },
        (error) => {
          if (error.status === 200) {
            this.tipoAnimacion = 'rechazado';
            this.mostrarAnimacion = true;
            this.animacionSalida = false;
            
            setTimeout(() => {
              this.navCtrl.navigateRoot('/tabs-negocio/reservas-dia');
              this.cerrarPopover();
            }, 2000);
            
            setTimeout(() => {
              this.animacionSalida = true;
              setTimeout(() => {
                this.mostrarAnimacion = false;
                this.animacionSalida = false;
                this.navCtrl.navigateRoot('/tabs-negocio/reservas-dia');
              }, 1000);
            }, 3000);
          } else {
            console.error('Error en la solicitud de cancelación:', error);
          }
        }
      );
  }
  cerrarPopover() {
    this.navCtrl.navigateRoot('/tabs-negocio/reservas-dia');
    this.popoverController.dismiss();
    this.navCtrl.navigateRoot('/tabs-negocio/reservas-dia');
  }

  formatearNumero(numero: number): string {
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
}
