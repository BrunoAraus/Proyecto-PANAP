import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { DetallesPage } from '../detalles/detalles.page';

@Component({
  selector: 'app-reservas-dia',
  templateUrl: './reservas-dia.page.html',
  styleUrls: ['./reservas-dia.page.scss'],
})
export class ReservasDiaPage implements OnInit {
  errorMensaje: string = '';
  usuario: any;
  negocios: any[] = [];
  reservas: any[] = [];

  apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';
  intervalId: any;

  constructor(
    private http: HttpClient, 
    private navCtrl: NavController,
    private popoverController: PopoverController) {}

  ngOnInit() {
    this.reconectar();
    this.cargarDatos();
  }

  async presentPopover(reserva: any) {
    const popover = await this.popoverController.create({
      component: DetallesPage,
      componentProps: {
        id_reserva: reserva.ID_RESERVAS,
        detallesReserva: reserva
      },
      translucent: true,
      cssClass: 'custom-popover-css4'
    });
  
    await popover.present();
  
    const { data } = await popover.onWillDismiss();
    console.log('Popover cerrado: ', data);
    this.reconectar();
    this.cargarDatos();
  }

  reconectar() {
    const correo = localStorage.getItem('userEmail');
    const clave = localStorage.getItem('userPassword');

    if (correo && clave) {
      const body = {
        accion: 'iniciarnegocio',
        correo: correo,
        clave: clave
      };

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': ''
      });

      this.http.post(this.apiUrl, body, { headers: headers })
        .subscribe(
          (response: any) => {
            if (response.success) {
              console.log('Reconexión exitosa:', response.message);
              const usuarioData = response.user;
              const negociosData = response.negocios;
              const reservasData = response.reservas;
              const historicosData = response.historicos;
              localStorage.setItem('usuarioData', JSON.stringify(usuarioData));
              localStorage.setItem('negociosData', JSON.stringify(negociosData));
              localStorage.setItem('reservasData', JSON.stringify(reservasData));
              this.usuario = usuarioData;
              this.negocios = negociosData;
              this.reservas = reservasData;
            } else {
              console.log('Error en la reconexión:', response.message);
            }
          },
          (error) => {
            console.error('Error al intentar reconectar:', error);
          }
        );
    } else {
      console.error('No hay credenciales guardadas para reconectar.');
    }
  }

  cargarDatos() {
    const usuarioData = localStorage.getItem('usuarioData');
    const negociosData = localStorage.getItem('negociosData');
    const reservasData = localStorage.getItem('reservasData');

    if (usuarioData) {
      this.usuario = JSON.parse(usuarioData); 
    }

    if (negociosData) {
      this.negocios = JSON.parse(negociosData);
    }
    if (reservasData) {
      this.reservas = JSON.parse(reservasData);
    }
  }
  
}
