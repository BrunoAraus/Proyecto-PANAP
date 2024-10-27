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


  errorMensaje: string = '';

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  probarAPI() {
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
              this.navCtrl.navigateRoot('/iniciar-sesion');
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
