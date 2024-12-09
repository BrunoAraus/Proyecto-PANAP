import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage {
  apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';

  nombre: string = '';
  apellido: string = '';
  clave: string = '';
  correo: string = '';
  tipo: string = 'Cliente';
  mostrarContrasena: boolean = false;
  mostrarConfirmacion: boolean = false;

  errorNombre: string = '';
  errorApellido: string = '';
  errorCorreo: string = '';
  errorClave: string = '';
  errorClaveConfirmada: string = '';
  claveConfirmada: string = '';
  errorMensaje: string = '';


  constructor(private http: HttpClient, private navCtrl: NavController) {}

  probarAPI() {

    this.errorNombre = '';
    this.errorApellido = '';
    this.errorCorreo = '';
    this.errorClave = '';
    this.errorClaveConfirmada = '';

    this.validarNombre();
    this.validarApellido();
    this.validarCorreo();
    this.validarClave();
    this.validarClaveConfirmada();
    
    
    if (this.errorNombre || this.errorApellido || this.errorCorreo || this.errorClave || this.errorClaveConfirmada) {
      return;
    }

    const body = {
      accion: 'registro',
      nombre: this.nombre,
      apellido: this.apellido,
      clave: this.clave,
      correo: this.correo,
      tipo: this.tipo,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': ''
    });

    this.http.post(this.apiUrl, body, { headers: headers })
      .subscribe(
        (response: any) => {
          if (response.success) {
            localStorage.setItem('userEmail', this.correo);
            localStorage.setItem('userPassword', this.clave);
            console.log('Usuario registrado correctamente:', response.message);
            if (this.tipo === 'Cliente') {
              this.mostrarConfirmacion = true;
            } else if (this.tipo === 'Negocio') {
              this.navCtrl.navigateRoot('/informacion-negocio');
            }
            this.errorMensaje = ''; 
          } else {
            this.errorMensaje = response.message; 
          }
        },
        (error) => {
          console.error('Error al consumir la API:', error);
          this.errorMensaje = 'Ocurrió un error inesperado. Inténtalo más tarde.';
          const alerta = document.getElementById("alertaError");
            if (alerta) {
              alerta.classList.add("show");
              setTimeout(() => {
                alerta.classList.remove("show");
              }, 3000);
            }
          }
      );
  }

  validarNombre() {
    if (!this.nombre) {
      this.errorNombre = 'Debes ingresar tu nombre.';
    }else if (!this.validarNombreFormato()) {
      this.errorNombre = 'El nombre solo puede contener letras.';
    }
  } 
  //Fomato
  validarNombreFormato(): boolean {
    const regex = /^[A-Za-zÁáÉéÍíÓóÚúÑñ]+$/;  // Solo permite letras y acentos
    return regex.test(this.nombre);
  }
  validarApellido() {
    if (!this.apellido) {
      this.errorApellido = 'Debes ingresar tu apellido.';
    }else if (!this.validarApellidoFormato()) {
      this.errorApellido = 'El apellido solo puede contener letras.';
    }
  }
  //Fomato
  validarApellidoFormato(): boolean {
    const regex = /^[A-Za-zÁáÉéÍíÓóÚúÑñ]+$/;  // Solo permite letras y acentos
    return regex.test(this.apellido);
  }
  validarCorreo() {
    if (!this.correo) {
      this.errorCorreo = 'Debes ingresar un correo electrónico.';
    } else if (!this.validarCorreoFormato()) {
      this.errorCorreo = 'Correo no válido.';
    }
  }
  //Fomato
  validarCorreoFormato(): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(this.correo);
  }

  validarClave() {
    if (!this.clave) {
      this.errorClave = 'Debes ingresar una contraseña.';
    } else if (this.clave.length < 8) {
      this.errorClave = 'La contraseña debe tener al menos 8 caracteres.';
    } else if (!this.validarClaveFormato()) {
      this.errorClave = 'La contraseña debe incluir letras y números.';
    }
  }
  //Fomato
  validarClaveFormato(): boolean {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)/;
    return regex.test(this.clave);
  }

  validarClaveConfirmada() {
    if (this.clave && this.claveConfirmada && this.clave !== this.claveConfirmada) {
      this.errorClaveConfirmada = 'Las contraseñas no coinciden.';
    } else if (this.clave && !this.claveConfirmada) {
      this.errorClaveConfirmada = 'Debes confirmar la contraseña.';
    } else if (this.clave && this.claveConfirmada && this.clave === this.claveConfirmada) {
      this.errorClaveConfirmada = ''; 
    }
  }
  
  censurarContrasena(contrasena: string): string {
    if (contrasena.length <= 2) {
      return '*'.repeat(contrasena.length);
    }
    const firstChar = contrasena[0];
    const lastChar = contrasena[contrasena.length - 1];
    const hiddenPart = '*'.repeat(contrasena.length - 2);
    return `${firstChar}${hiddenPart}${lastChar}`;
  }
  alternarMostrarContrasena() {
    this.mostrarContrasena = !this.mostrarContrasena;
  }

  irAInicioSesion() {
    this.navCtrl.navigateRoot('/iniciar-sesion');
  }
}