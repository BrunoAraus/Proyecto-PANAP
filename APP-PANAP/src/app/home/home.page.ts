import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';
  verificandoSesion = true;

  constructor(private navCtrl: NavController, private http: HttpClient) {}

  ngOnInit() {
    this.verificarSesion();
  }
  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }

  verificarSesion() {
    const correo = localStorage.getItem('userEmail');
    const clave = localStorage.getItem('userPassword');

    if (!correo || !clave) {
      this.verificandoSesion = false;
      return;
    }

    const body = {
      accion: 'login',
      correo: correo,
      clave: clave,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '',
    });

    this.http.post(this.apiUrl, body, { headers: headers }).subscribe(
      (response: any) => {
        if (response.success) {
          const usuarioData = response.user;
          const negociosData = response.negocios;
          const historicoData = response.historicos;

          localStorage.setItem('usuarioData', JSON.stringify(usuarioData));
          localStorage.setItem('negociosData', JSON.stringify(negociosData));
          localStorage.setItem('historicoData', JSON.stringify(historicoData));

          
          if (usuarioData.tipo === 'Cliente') {
            this.navCtrl.navigateRoot(
              usuarioData.valido === 'INVALIDO'
                ? '/validacion-codigo'
                : '/tabs-cliente/home-cliente'
            );
          } else if (usuarioData.tipo === 'Negocio') {
            const negocioPendiente = negociosData.find(
              (negocio: any) =>
                negocio.ID_USUARIO === usuarioData.id &&
                negocio.ESTADO === 'PENDIENTE'
            );
            this.navCtrl.navigateRoot(
              usuarioData.valido === 'INVALIDO'
                ? '/validacion-codigo'
                : negocioPendiente
                ? '/confirmacion-negocio'
                : '/tabs-negocio/home-negocio'
            );
          } else if (usuarioData.tipo === 'Administrador') {
            this.navCtrl.navigateRoot('/tabs-admin/home-admin');
          }
        } else {
          console.log('No se pudo autenticar automáticamente.');
        }
        this.verificandoSesion = false;
      },
      (error) => {
        console.error('Error al intentar autenticar automáticamente:', error);
        this.verificandoSesion = false;
      }
    );
  }

  irLogin() {
    this.navCtrl.navigateRoot('/iniciar-sesion');
  }

  irRegistro() {
    this.navCtrl.navigateRoot('/registro');
  }
}
