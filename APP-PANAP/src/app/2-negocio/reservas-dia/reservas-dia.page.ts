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
  codigoBusqueda: string = '';
  reservasFiltradas: any[] = [];
  mostrarMensajeActualizar: boolean = false;

  apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';
  intervalId: any;

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private popoverController: PopoverController) { }

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
    this.mostrarMensajeActualizar = true;
    setTimeout(() => {
      const mensaje = document.querySelector('.mensaje-actualizar');
      mensaje?.classList.add('hiding');
      
      setTimeout(() => {
        this.mostrarMensajeActualizar = false;
      }, 300);
    }, 2700);
    
    this.navCtrl.navigateRoot('/tabs-negocio/reservas-dia');
    this.reconectar();
    this.cargarDatos();
    console.log('Popover cerrado: ', data);
    this.navCtrl.navigateRoot('/tabs-negocio/reservas-dia');
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
      this.reservasFiltradas = this.reservas;
    }
  }

  filtrarReservas() {
    if (!this.codigoBusqueda) {
      this.reservasFiltradas = this.reservas;
    } else {
      const busqueda = this.codigoBusqueda.toLowerCase();
      this.reservasFiltradas = this.reservas.filter(reserva =>
        reserva.R_CODIGO.toLowerCase().includes(busqueda) ||
        reserva.NOMBRE_R.toLowerCase().includes(busqueda) ||
        reserva.APELLIDO_R.toLowerCase().includes(busqueda)
      );
    }
  }

  handleRefresh(event: any) {
    // Primero reconectamos con el servidor
    this.reconectar();

    // Luego cargamos los datos
    this.cargarDatos();

    // Completamos el evento de refresh después de 1.5 segundos
    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }
}
