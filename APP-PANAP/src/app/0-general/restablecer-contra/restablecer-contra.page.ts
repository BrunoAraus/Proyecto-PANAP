import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer-contra',
  templateUrl: './restablecer-contra.page.html',
  styleUrls: ['./restablecer-contra.page.scss'],
})
export class RestablecerContraPage {
  errorMensaje: string = '';
  contra: string = '';
  contra2: string = '';
  mostrarContrasena: boolean = false;
  apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';

  errorGeneral: string = '';
  errorContra: String = '';
  errorContra2: String = '';

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  validarCampos(): boolean {
    let valido = true;

    // Reinicia los mensajes de error
    this.errorContra = '';
    this.errorContra2 = '';
    this.errorGeneral = '';

    // Validar que la contraseña tenga al menos 8 caracteres
    if (this.contra.length < 8) {
      this.errorContra = 'La contraseña debe tener al menos 8 caracteres';
      valido = false;
    }

    const mayusculaRegex = /[A-Z]/;
    const numeroRegex = /[0-9]/;
    if (!mayusculaRegex.test(this.contra)) {
      this.errorContra = 'La contraseña debe contener al menos una letra mayúscula';
      valido = false;
    }
    if (!numeroRegex.test(this.contra)) {
      this.errorContra = 'La contraseña debe contener al menos un número';
      valido = false;
    }


    // Validar que ambas contraseñas coincidan
    if (this.contra && this.contra2 && this.contra !== this.contra2) {
      this.errorContra2 = 'Las contraseñas no coinciden';
      valido = false;
    }

    // Validar que ambos campos estén llenos
    if (!this.contra.trim() || !this.contra2.trim()) {
      this.errorGeneral = 'Debe completar ambos campos de contraseña';
      valido = false;
    }

    return valido;
  }
  
  cambiar() {
        // Verificar los campos antes de continuar
        if (!this.validarCampos()) {
          return; // Detener la ejecución si los campos no son válidos
        }

      const body = {
        accion: 'CLAVE',
        CORREO: localStorage.getItem('correo'),
        CLAVE: this.contra
      };

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization:
          '',
      });

      this.http.post(this.apiUrl, body, { headers: headers }).subscribe(
        (response: any) => {
          if (response.success) {
            console.log('contraseña cambiada correctamente:', response.message);
            this.navCtrl.navigateBack('/iniciar-sesion');
          } else {
            this.errorMensaje = 'Error al registrar el stock: ' + response.message;
          }
        },
        (error) => {
          console.error('Error al registrar el stock:', error);
          this.errorMensaje = 'Ocurrió un error al registrar el stock.';
        }
      );
  }

  isFormValid(): boolean {

    return (
      this.contra === this.contra2 &&
      this.contra !== ''
    );
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
}
