import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-historial-reservas',
  templateUrl: './historial-reservas.page.html',
  styleUrls: ['./historial-reservas.page.scss'],
})
export class HistorialReservasPage implements OnInit {
  errorMensaje: string = '';
  usuario: any;
  negocios: any[] = [];
  historicos: any[] = [];

  apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';
  intervalId: any;

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  ngOnInit() {
    this.reconectar();
    this.cargarDatos();
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
              const negociosData = response.negocios;
              const reservasData = response.reservas;
              const historicosData = response.historicos;
              localStorage.setItem('usuarioData', JSON.stringify(usuarioData));
              localStorage.setItem('negociosData', JSON.stringify(negociosData));
              localStorage.setItem('historicosData', JSON.stringify(historicosData));
              this.usuario = usuarioData;
              this.negocios = negociosData;
              this.historicos = historicosData;
            } else {

              console.log('Error en la reconexión:', response.message);
            }
          },
          (error) => {
            console.error('Error al intentar reconectar:', error);
          }
        );
    } else {
      console.error('No hay credenciales guardadas para reconectar.');
    }
  }
  cargarDatos() {
    const usuarioData = localStorage.getItem('usuarioData');
    const negociosData = localStorage.getItem('negociosData');
    const historicosData = localStorage.getItem('historicosData');

    if (usuarioData) {
      this.usuario = JSON.parse(usuarioData); 
    }

    if (negociosData) {
      this.negocios = JSON.parse(negociosData);
    }
    if (historicosData) {
      this.historicos = JSON.parse(historicosData);
    }
  }

  handleRefresh(event: any) {
    // Primero reconectamos con el servidor
    this.reconectar();
    
    // Luego cargamos los datos
    this.cargarDatos();
    
    // Completamos el evento de refresh después de 1.5 segundos
    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }
}
