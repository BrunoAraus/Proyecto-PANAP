import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage {
  apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';

  correo: string = ''; 
  clave: string = '';  
  errorCorreo: string = ''; 
  errorClave: string = '';
  errorMensaje: string = ''; 
  mostrarContrasena: boolean = false;
  cargando: boolean = false; // Variable para controlar el estado del spinner

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  iniciarSesion() {
    this.cargando = true; // Mostrar el spinner de carga

    this.errorCorreo = '';
    this.errorClave = '';
    this.errorMensaje = '';

    // Validaciones
    if (!this.correo) {
      this.errorCorreo = 'Debes colocar el correo.';
    } else if (!this.validarCorreo()) {
      this.errorCorreo = 'Correo no encontrado o inválido.';
    }

    if (!this.clave) {
      this.errorClave = 'Debes colocar la contraseña.';
    }

    if (this.errorCorreo || this.errorClave) {
      this.cargando = false; // Ocultar el spinner si hay errores
      return;
    }

    const body = {
      accion: 'login',
      correo: this.correo,
      clave: this.clave
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': ''
    });

    this.http.post(this.apiUrl, body, { headers: headers })
      .subscribe(
        (response: any) => {
          if (response.success) {
            this.errorMensaje = ''; 
            const usuarioData = response.user; 
            const negociosData = response.negocios; 
            const historicoData = response.historicos; 

            localStorage.setItem('usuarioData', JSON.stringify(usuarioData));
            localStorage.setItem('negociosData', JSON.stringify(negociosData));
            localStorage.setItem('historicoData', JSON.stringify(historicoData));
            localStorage.setItem('userEmail', this.correo);
            localStorage.setItem('userPassword', this.clave);

            if (usuarioData.tipo === 'Cliente') {
              this.navCtrl.navigateRoot(usuarioData.valido === 'INVALIDO' ? '/validacion-codigo' : '/tabs-cliente/home-cliente');
            } else if (usuarioData.tipo === 'Negocio') {
              const negocioPendiente = negociosData.find((negocio: any) => negocio.ID_USUARIO === usuarioData.id && negocio.ESTADO === 'PENDIENTE');
              this.navCtrl.navigateRoot(usuarioData.valido === 'INVALIDO' ? '/validacion-codigo' : (negocioPendiente ? '/confirmacion-negocio' : '/tabs-negocio/home-negocio'));
            } else if (usuarioData.tipo === 'Administrador') {
              this.navCtrl.navigateRoot('/tabs-admin/listado-negocios');
            } else {
              console.log('Tipo de usuario no reconocido');
            }
          } else {
            this.errorCorreo = response.message; 
          }
          this.cargando = false; // Ocultar el spinner después del éxito o error
        },
        (error) => {
          console.error('Error al consumir la API:', error);
          this.errorCorreo = 'Ocurrió un error inesperado. Inténtalo más tarde.';
          this.cargando = false; // Ocultar el spinner en caso de error
        }
      );
  }

  censurarContrasena(contrasena: string): string {
    if (contrasena.length <= 2) return '*'.repeat(contrasena.length);
    return `${contrasena[0]}${'*'.repeat(contrasena.length - 2)}${contrasena[contrasena.length - 1]}`;
  }

  validarCorreo(): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(this.correo);
  }

  validarClave(): boolean {
    return this.clave.length >= 6;
  }

  alternarMostrarContrasena() {
    this.mostrarContrasena = !this.mostrarContrasena;
  }
}
