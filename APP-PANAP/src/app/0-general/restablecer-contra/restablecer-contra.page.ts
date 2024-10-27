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

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  
  cambiar() {
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
