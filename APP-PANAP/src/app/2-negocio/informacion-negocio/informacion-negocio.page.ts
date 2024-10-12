import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-informacion-negocio',
  templateUrl: './informacion-negocio.page.html',
  styleUrls: ['./informacion-negocio.page.scss'],
})
export class InformacionNegocioPage {
  apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';

  nombre: string = '';
  apellido: string = '';
  clave: string = '';
  correo: string = '';
  tipo: string = '';


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
            console.log('Usuario registrado correctamente:', response.message);
            this.navCtrl.navigateRoot('/iniciar-sesion');
            this.errorMensaje = ''; 
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
