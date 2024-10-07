import { Component } from '@angular/core';
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

  errorMensaje: string = ''; 

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  iniciarSesion() {
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
            console.log('Login exitoso:', response.message);

            this.errorMensaje = ''; 

            
            if (response.tipo === 'Cliente') {
              
              this.navCtrl.navigateRoot('/tabs-cliente/home-cliente');
            } else if (response.tipo === 'Negocio'){
              
              this.navCtrl.navigateRoot('/tabs-negocio/home-negocio');
            }

          } else {
            this.errorMensaje = response.message; 
          }
        },
        (error) => {
          console.error('Error al consumir la API:', error);
          this.errorMensaje = 'Ocurrió un error inesperado. Inténtalo más tarde.';
        }
      );
  }
}
