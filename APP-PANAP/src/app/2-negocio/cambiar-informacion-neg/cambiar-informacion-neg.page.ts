import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cambiar-informacion-neg',
  templateUrl: './cambiar-informacion-neg.page.html',
  styleUrls: ['./cambiar-informacion-neg.page.scss'],
})
export class CambiarInformacionNegPage implements OnInit {
  errorMensaje: string = '';
  usuario: any;
  nombre: string = ''
  apellido: string = ''
  nombreError: string = '';
  apellidoError: string = '';
  isFormValid: boolean = false;
  apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    const usuarioData = localStorage.getItem('usuarioData');

    if (usuarioData) {
      this.usuario = JSON.parse(usuarioData);
    }
  }
  validarCampos() {
    // Validar nombre
    const soloLetrasRegex = /^[a-zA-Z\s]*$/;
    if (!this.nombre || this.nombre.length < 2) {
      this.nombreError = 'El nombre debe tener al menos 2 letras.';
    } else if (!soloLetrasRegex.test(this.nombre)) {
      this.nombreError = 'El nombre no puede contener números.';
    } else {
      this.nombreError = '';
    }
  // Validar apellido
    if (!this.apellido || this.apellido.length < 2) {
      this.apellidoError = 'El apellido debe tener al menos 2 letras.';
    } else if (!soloLetrasRegex.test(this.apellido)) {
      this.apellidoError = 'El apellido no puede contener números.';
    } else {
      this.apellidoError = '';
    }

  // Verificar si el formulario es válido
  this.isFormValid = !this.nombreError && !this.apellidoError;
}

  cambiar() {
    this.validarCampos(); // Asegurar validación antes de enviar

    if (!this.isFormValid) {
      return; // No se ejecuta si las validaciones fallan
    }

      if (!this.nombre) {
        this.nombre = this.usuario.nombre;
      }
      if (!this.apellido) {
        this.apellido = this.usuario.apellido;
      }
      const body = {
        accion: 'CAMBIAR',
        NOMBRE: this.nombre,
        APELLIDO: this.apellido,
        ID_USUARIO: this.usuario.id,
      };      

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':''
      });

      this.http.post(this.apiUrl, body, { headers: headers }).subscribe(
        (response: any) => {
          if (response.success) {
            console.log('Stock Añadido Correctamente:', response.message);
            this.navCtrl.navigateBack('/tabs-negocio/home-negocio');
          } else {
            this.errorMensaje = 'Error al cambiar los datos: ' + response.message;
          }
        },
        (error) => {
          console.error('Error al cambiar los datos:', error);
          this.errorMensaje = 'Ocurrió un error al cambiar los datos.';
        }
      );
  }
}

