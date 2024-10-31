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

  cambiar() {
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
        Authorization:
          '',
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

