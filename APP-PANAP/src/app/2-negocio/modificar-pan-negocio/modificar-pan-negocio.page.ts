import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-modificar-pan-negocio',
  templateUrl: './modificar-pan-negocio.page.html',
  styleUrls: ['./modificar-pan-negocio.page.scss'],
})
export class ModificarPanNegocioPage implements OnInit {
  errorMensaje: string = '';
  usuario: any;
  negocios: any[] = [];
  negocio = {
    fecha_stock: '',
    disponibilidad: '',
  };

  apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';
  intervalId: any;

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  ngOnInit() {
    this.FECHA();
    this.reconectar();
    this.cargarDatos();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  

  cargarDatos() {
    const usuarioData = localStorage.getItem('usuarioData');
    const negociosData = localStorage.getItem('negociosData');

    if (usuarioData) {
      this.usuario = JSON.parse(usuarioData);
    }

    if (negociosData) {
      this.negocios = JSON.parse(negociosData);
    }
  }

  FECHA() {
    const fechaActual = new Date();
    this.negocio.fecha_stock = `${fechaActual.getFullYear()}-${(fechaActual.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${fechaActual
      .getDate()
      .toString()
      .padStart(2, '0')} ${fechaActual
      .getHours()
      .toString()
      .padStart(2, '0')}:${fechaActual
      .getMinutes()
      .toString()
      .padStart(2, '0')}:${fechaActual
      .getSeconds()
      .toString()
      .padStart(2, '0')}`;
  }
  

  reconectar() {
    const correo = localStorage.getItem('userEmail');
    const clave = localStorage.getItem('userPassword');

    if (correo && clave) {
      const body = {
        accion: 'iniciarnegocio',
        correo: correo,
        clave: clave,
      };

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization:
          '',
      });

      this.http.post(this.apiUrl, body, { headers: headers }).subscribe(
        (response: any) => {
          if (response.success) {
            console.log('Reconexión exitosa:', response.message);
            const usuarioData = response.user;
            const negociosData = response.negocios;
            localStorage.setItem('usuarioData', JSON.stringify(usuarioData));
            localStorage.setItem('negociosData', JSON.stringify(negociosData));
            this.usuario = usuarioData;
            this.negocios = negociosData;
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

  modificar() {
      // Validación: Verificar si hay una opción seleccionada
  if (!this.negocio.disponibilidad) {
    this.errorMensaje = 'Debe seleccionar una opción antes de actualizar.';
    console.error(this.errorMensaje);
    return; // Detener la ejecución si no hay selección
  }
    console.log('Fecha y hora en formato TIMESTAMP:', this.negocio.fecha_stock);
    if (this.usuario && this.usuario.id) {
      const body = {
        accion: 'stock',
        fecha_stock: this.negocio.fecha_stock,
        disponibilidad: this.negocio.disponibilidad,
        id_usuario: this.usuario.id,
      };

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization:
          '',
      });

      this.http.post(this.apiUrl, body, { headers: headers }).subscribe(
        (response: any) => {
          if (response.success) {
            console.log('Stock Añadido Correctamente:', response.message);
            this.navCtrl.navigateBack('/tabs-negocio/home-negocio');
          } else {
            this.errorMensaje = 'Error al modificar la disponibilidad: ' + response.message;
          }
        },
        (error) => {
          console.error('Error al modificar la disponibilidad:', error);
          this.errorMensaje = 'Ocurrió un error al modificar la disponibilidad.';
        }
      );
    } else {
      this.errorMensaje = 'Usuario no autenticado.';
    }
  }
}
