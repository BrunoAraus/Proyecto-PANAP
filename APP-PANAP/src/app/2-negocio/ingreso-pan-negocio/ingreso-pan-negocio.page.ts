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
  errorMensajeStock: string = '';
  errorMensajeValor: string = '';
  errorMensajeConfirmacion: string = '';

  apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';
  intervalId: any;
  mostrarAnimacion = false;
  animacionSalida = false;

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
        'Authorization':''
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
  validarCampos() {
    // Validación para stock inicial
    if (/[^0-9]/.test(this.negocio.stock_inicial)) {
      this.errorMensajeStock = 'La cantidad de pan inicial solo puede contener números.';
    } else if (parseInt(this.negocio.stock_inicial) <= 0 || this.negocio.stock_inicial === '') {
      this.errorMensajeStock = 'La cantidad de pan inicial debe ser un número mayor a 0.';
    } else {
      this.errorMensajeStock = '';
    }
  
    // Validación para valor por kilo
    if (/[^0-9]/.test(this.negocio.valor_kilo)) {
      this.errorMensajeValor = 'El valor del pan por kilo solo puede contener números.';
    } else if (parseInt(this.negocio.valor_kilo) <= 0 || this.negocio.valor_kilo === '') {
      this.errorMensajeValor = 'El valor del pan por kilo debe ser un número mayor a 0.';
    } else {
      this.errorMensajeValor = '';
    }
  
    // Validación para confirmación de valor
    if (this.negocio.valor_kilo !== this.negocio.valor_kilo_confirm) {
      this.errorMensajeConfirmacion = 'El valor del pan por kilo no coincide con la confirmación.';
    } else {
      this.errorMensajeConfirmacion = '';
    }
  }

  anadirstock() {
    this.validarCampos();

    if (
      this.errorMensajeStock ||
      this.errorMensajeValor ||
      this.errorMensajeConfirmacion
    ) {
      return;
    }
    
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
        'Authorization':''
      });

      this.http.post(this.apiUrl, body, { headers: headers, responseType: 'text' }).subscribe(
        (response: any) => {
          try {
            // Intentar parsear la respuesta como JSON si es posible
            const jsonResponse = response ? JSON.parse(response) : null;
            
            if (jsonResponse && jsonResponse.success) {
              this.mostrarAnimacion = true;
              this.animacionSalida = false;
              
              // Esperamos 300ms para que la animación de entrada termine
              setTimeout(() => {
                // Limpiamos el formulario a la mitad del tiempo total
                this.limpiarFormulario();
              }, 800); // A mitad de camino entre el inicio y el final
              
              setTimeout(() => {
                this.animacionSalida = true;
                setTimeout(() => {
                  this.mostrarAnimacion = false;
                  this.animacionSalida = false;
                }, 300);
              }, 1700);
            } else {
              // Si la respuesta es vacía o no tiene success, asumimos que fue exitosa
              this.mostrarAnimacion = true;
              this.animacionSalida = false;
              
              setTimeout(() => {
                this.animacionSalida = true;
                setTimeout(() => {
                  this.mostrarAnimacion = false;
                  this.animacionSalida = false;
                  this.limpiarFormulario();
                }, 300); // Duración de la animación de salida
              }, 1700); // Tiempo total - duración de la animación de salida
            }
          } catch (e) {
            // Si no podemos parsear el JSON pero recibimos una respuesta,
            // asumimos que la operación fue exitosa
            if (response) {
              this.mostrarAnimacion = true;
              this.animacionSalida = false;
              
              // Esperamos 300ms para que la animación de entrada termine
              setTimeout(() => {
                // Limpiamos el formulario a la mitad del tiempo total
                this.limpiarFormulario();
              }, 800); // A mitad de camino entre el inicio y el final
              
              setTimeout(() => {
                this.animacionSalida = true;
                setTimeout(() => {
                  this.mostrarAnimacion = false;
                  this.animacionSalida = false;
                }, 300);
              }, 1700);
            } else {
              this.errorMensaje = 'Error al procesar la respuesta del servidor';
            }
          }
        },
        (error) => {
          // Si el error es de parsing pero el status es 200, asumimos éxito
          if (error.status === 200) {
            this.mostrarAnimacion = true;
            this.animacionSalida = false;
            
            setTimeout(() => {
              this.animacionSalida = true;
              setTimeout(() => {
                this.mostrarAnimacion = false;
                this.animacionSalida = false;
                this.limpiarFormulario();
              }, 300); // Duración de la animación de salida
            }, 1700); // Tiempo total - duración de la animación de salida
          } else {
            console.error('Error al registrar el stock:', error);
            this.errorMensaje = 'Ocurrió un error al registrar el stock.';
          }
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

  limpiarFormulario() {
    // Limpiamos los campos
    this.negocio = {
      fecha_stock: '',
      stock_inicial: '',
      valor_kilo: '',
      valor_kilo_confirm: ''
    };
    // Actualizamos la fecha
    this.FECHA();
  }
}
