import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ingreso-pan-negocio',
  templateUrl: './ingreso-pan-negocio.page.html',
  styleUrls: ['./ingreso-pan-negocio.page.scss'],
})
export class IngresoPanNegocioPage implements OnInit, OnDestroy {
  lat: number = 0;
  lng: number = 0;
  errorMensaje: string = '';
  usuario: any;
  negocios: any[] = [];
  negocio = {
    fecha_stock: '',
    stock_inicial: '',
    valor_kilo: '',
    valor_kilo_confirm: '',
  };

  apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';
  intervalId: any;

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  ngOnInit() {
    this.FECHA();
    this.getCurrentLocation();
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

  getCurrentLocation(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            resolve();
          },
          (error) => {
            console.error('Error obteniendo la localización:', error);
            reject(error);
          }
        );
      } else {
        console.error('Error en Geolocalización');
        reject(new Error('Error en Geolocalización'));
      }
    });
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

  anadirstock() {
    console.log('Fecha y hora en formato TIMESTAMP:', this.negocio.fecha_stock);
    if (this.usuario && this.usuario.id) {
      const body = {
        accion: 'update',
        fecha_stock: this.negocio.fecha_stock,
        stock_inicial: this.negocio.stock_inicial,
        valor_kilo: this.negocio.valor_kilo,
        latitud: this.lat.toString(),
        longitud: this.lng.toString(),
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
            this.errorMensaje = 'Error al registrar el stock: ' + response.message;
          }
        },
        (error) => {
          console.error('Error al registrar el stock:', error);
          this.errorMensaje = 'Ocurrió un error al registrar el stock.';
        }
      );
    } else {
      this.errorMensaje = 'Usuario no autenticado.';
    }
  }

  isFormValid(): boolean {
    const valorKilo = parseFloat(this.negocio.valor_kilo);
    const valorKiloConfirm = parseFloat(this.negocio.valor_kilo_confirm);

    return (
      !isNaN(valorKilo) &&
      !isNaN(valorKiloConfirm) &&
      valorKilo === valorKiloConfirm &&
      this.negocio.stock_inicial !== ''
    );
  }
}
