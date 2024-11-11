import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-informacion-negocio',
  templateUrl: './informacion-negocio.page.html',
  styleUrls: ['./informacion-negocio.page.scss'],
})
export class InformacionNegocioPage {

  errorMensaje: string = '';
  usuario: any;
  errorNombre: string = '';
  errorNumero: string = '';
  nombreNegocio: string = '';
  numeroNegocio: string = '';
  formSubmitted: boolean = false;
  
  negocio = {
    nombre: '',
    numero: '',
    efectivo: false,
    tarjeta: false,
    transferencia: false
  };

  apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';
  intervalId: any;

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  ngOnInit() {
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

    if (usuarioData) {
      this.usuario = JSON.parse(usuarioData); 
    }
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
              localStorage.setItem('usuarioData', JSON.stringify(usuarioData));
              this.usuario = usuarioData;
            } else {
              console.log('Error en la reconexión:', response.message);
              const alerta = document.getElementById("alertaError");
              if (alerta) {
                alerta.classList.add("show");
                setTimeout(() => {
                  alerta.classList.remove("show");
                }, 3000);
              }
            }
          },
          (error) => {
            console.error('Error al intentar reconectar:', error);
            const alerta = document.getElementById("alertaError");
            if (alerta) {
              alerta.classList.add("show");
              setTimeout(() => {
                alerta.classList.remove("show");
              }, 3000);
            }
          }
        );
    } else {
      console.error('No hay credenciales guardadas para reconectar.');
    }
  }
  validarNombre(): boolean {
    const regex = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/; // Solo letras y espacios
    return regex.test(this.negocio.nombre);
  }

  validarNumero(): boolean {
    const regex = /^[0-9]+$/; // Solo números
    return regex.test(this.negocio.numero);
  }


  registrarNegocio() {
    this.formSubmitted = true; // Cambiar a true cuando se intente enviar el formulario

    if (!this.validarNombre()) {
      if (this.negocio.nombre.trim() === '') {
        this.errorMensaje = 'Debe de llenar el campo de nombre del negocio.';
      } else {
        this.errorMensaje = 'El nombre del negocio solo debe contener letras.';
      }
      this.mostrarError();
      return;
    }
    
    if (!this.validarNumero()) {
      if (this.negocio.numero.trim() === '') {
        this.errorMensaje = 'Debe de llenar el campo de número del negocio.';
      } else {
        this.errorMensaje = 'El número del negocio solo debe contener números.';
      }
      this.mostrarError();
      return;
    }
    if (!this.negocio.efectivo && !this.negocio.tarjeta && !this.negocio.transferencia) {
      this.errorMensaje = 'Debe seleccionar al menos un método de pago.';
      this.mostrarError();
      return;
    }
    if (this.usuario && this.usuario.id) {
      const body = {
        accion: 'registron',
        n_nombre: this.negocio.nombre,
        n_numero: this.negocio.numero,
        id_usuario: this.usuario.id,
        efectivo: this.negocio.efectivo ? 1 : 0,
        tarjeta: this.negocio.tarjeta ? 1 : 0,
        transferencia: this.negocio.transferencia ? 1 : 0
      };

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': ''
      });

      this.http.post(this.apiUrl, body, { headers: headers })
        .subscribe(
          (response: any) => {
            if (response.success) {
              console.log('Negocio registrado correctamente:', response.message);
              this.navCtrl.navigateBack('/informacion-negocio-foto'); 
            } else {
              this.errorMensaje = 'Error al registrar el negocio: ' + response.message;
              const alerta = document.getElementById("alertaError");
              if (alerta) {
                alerta.classList.add("show");
                setTimeout(() => {
                  alerta.classList.remove("show");
                }, 3000);
              }
            }
          },
          (error) => {
            console.error('Error al registrar el negocio:', error);
            this.errorMensaje = 'Ocurrió un error al registrar el negocio.';
            const alerta = document.getElementById("alertaError");
            if (alerta) {
              alerta.classList.add("show");
              setTimeout(() => {
                alerta.classList.remove("show");
              }, 3000);
            }
          }
        );
    } else {
      this.errorMensaje = 'Usuario no autenticado.';
      const alerta = document.getElementById("alertaError");
            if (alerta) {
              alerta.classList.add("show");
              setTimeout(() => {
                alerta.classList.remove("show");
              }, 3000);
            }
    }
  }
  mostrarError() {
    const alerta = document.getElementById("alertaError");
    if (alerta) {
      alerta.classList.add("show");
      setTimeout(() => {
        alerta.classList.remove("show");
      }, 3000);
    }
  }
}
