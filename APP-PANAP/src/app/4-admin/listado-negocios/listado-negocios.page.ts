import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController, PopoverController } from '@ionic/angular';
import { DetallesPage } from '../detalles/detalles.page';

@Component({
  selector: 'app-listado-negocios',
  templateUrl: './listado-negocios.page.html',
  styleUrls: ['./listado-negocios.page.scss'],
})
export class ListadoNegociosPage implements OnInit, OnDestroy {
  usuario: any;
  negocios: any[] = [];
  apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {
    this.reconectar();
    this.cargarDatos();
  }

  ngOnDestroy() {
  }
  reconectar() {
    const correo = localStorage.getItem('userEmail');
    const clave = localStorage.getItem('userPassword');

    if (correo && clave) {
      const body = {
        accion: 'login2',
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

              localStorage.setItem('usuarioData', JSON.stringify(usuarioData));
              localStorage.setItem('negociosData', JSON.stringify(negociosData));

              this.usuario = usuarioData;
              this.negocios = negociosData;
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

    if (usuarioData) {
      this.usuario = JSON.parse(usuarioData);
    }

    if (negociosData) {
      this.negocios = JSON.parse(negociosData);
    }
  }

  async presentPopover(negocio: any) {
    const popover = await this.popoverController.create({
      component: DetallesPage,
      componentProps: {
        negocio: negocio
      },
      translucent: true, 
      cssClass: 'custom-popover-css4'
    });
    
    await popover.present();
    const { data } = await popover.onWillDismiss();
    this.reconectar();
    this.cargarDatos();
    console.log('Popover cerrado: ', data);
  }
}
