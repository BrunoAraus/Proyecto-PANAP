import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

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

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  ngOnInit() {
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
            const reserva = this.reservas.find(r => r.ID_USUARIO === idUsuario);
            if (reserva) {
              reserva.ESTADO = 'ACEPTADO';
            }
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
            this.reservas = this.reservas.filter(r => r.ID_RESERVAS !== idReservas);
          } else {
            console.error('Error al cancelar la reserva:', response.message);
          }
        },
        (error) => {
          console.error('Error en la solicitud de cancelación:', error);
        }
      );
  }
}
