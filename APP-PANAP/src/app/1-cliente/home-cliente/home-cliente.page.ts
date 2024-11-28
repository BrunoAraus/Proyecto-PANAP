  import { Component, OnInit, OnDestroy } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { NavController } from '@ionic/angular';

  @Component({
    selector: 'app-home-cliente',
    templateUrl: './home-cliente.page.html',
    styleUrls: ['./home-cliente.page.scss'],
  })
  export class HomeClientePage implements OnInit, OnDestroy {
    usuario: any;
    negocios: any[] = [];
    reserva: any;
    historico: any[] = [];
    apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';
    intervalId: any;

    constructor(private http: HttpClient, private navCtrl: NavController) {}

    ngOnInit() {
      this.reconectar();
      this.cargarDatos();
      this.intervalId = setInterval(() => {
        this.reconectar();
      }, 60000); 
    }

    ngOnDestroy() {
      
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    }

    cargarDatos() {
      const usuarioData = localStorage.getItem('usuarioData');
      const negociosData = localStorage.getItem('negociosData');
      const reservasData = localStorage.getItem('reservasData');
      const historicoData = localStorage.getItem('historicoData');

      if (usuarioData) {
        this.usuario = JSON.parse(usuarioData); 
      }

      if (negociosData) {
        this.negocios = JSON.parse(negociosData);
      }
      if (reservasData) {
        this.reserva = JSON.parse(reservasData);
      }
      if (historicoData) {
        this.historico = JSON.parse(historicoData); 
      }
    }

    reconectar() {
      const correo = localStorage.getItem('userEmail');
      const clave = localStorage.getItem('userPassword');

      if (correo && clave) {
        const body = {
          accion: 'login',
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
                const historicoData = response.historicos;

                localStorage.setItem('usuarioData', JSON.stringify(usuarioData));
                localStorage.setItem('negociosData', JSON.stringify(negociosData));
                localStorage.setItem('reservasData', JSON.stringify(reservasData));
                localStorage.setItem('historicoData', JSON.stringify(historicoData));

              
                this.usuario = usuarioData;
                this.negocios = negociosData;
                this.reserva = reservasData;
                this.historico = historicoData;
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
  }
