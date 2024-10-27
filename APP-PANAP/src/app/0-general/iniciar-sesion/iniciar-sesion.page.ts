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
  mostrarContrasena: boolean = false;

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

            const usuarioData = response.user; 
            const negociosData = response.negocios; 

            
            localStorage.setItem('usuarioData', JSON.stringify(usuarioData));
            localStorage.setItem('negociosData', JSON.stringify(negociosData));
            localStorage.setItem('userEmail', this.correo);
            localStorage.setItem('userPassword', this.clave);

            
            if (usuarioData.tipo === 'Cliente') {
              if (usuarioData.valido === 'INVALIDO') {
                this.navCtrl.navigateRoot('/validacion-codigo');
              } else if (usuarioData.valido === 'VALIDO') {
                this.navCtrl.navigateRoot('/tabs-cliente/home-cliente');
              }
            } else if (usuarioData.tipo === 'Negocio') {
              if (usuarioData.valido === 'INVALIDO') {
                this.navCtrl.navigateRoot('/validacion-codigo');
              } else if (usuarioData.valido === 'VALIDO') {
                const negocioPendiente = negociosData.find((negocio: any) => negocio.ID_USUARIO === usuarioData.id && negocio.ESTADO === 'PENDIENTE');
                if (negocioPendiente) {
                  console.log('Negocio con ID coincidente está en estado PENDIENTE');
                  this.navCtrl.navigateRoot('/confirmacion-negocio');
                } else {
                  console.log('Negocio no tiene estado PENDIENTE');
                  this.navCtrl.navigateRoot('/tabs-negocio/home-negocio');
                }
              }
            } else {
              console.log('Tipo de usuario no reconocido');
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
