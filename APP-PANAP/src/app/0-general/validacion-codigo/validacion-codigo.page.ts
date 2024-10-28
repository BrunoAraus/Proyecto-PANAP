import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-validacion-codigo',
  templateUrl: './validacion-codigo.page.html',
  styleUrls: ['./validacion-codigo.page.scss'],
})
export class ValidacionCodigoPage {

  codigoIngresado: string = '';
  codigoEsperado: string = 'wGgQx';
  mensajeError: string = '';
  correo: any = '';
  correoCensurado: string = '';

  apiUrl: string = 'https://panapp.duckdns.org/rest/API_PRUEBA.php'; 

  ngOnInit() { 
    this.correo = localStorage.getItem('userEmail');
    this.correoCensurado = this.censurarEmail(this.correo);
    this.enviarCorreo()
  }
  
  constructor(private navCtrl: NavController, private http: HttpClient) {
    this.correoCensurado = this.censurarEmail(this.correo);
  }

  censurarEmail(correo1: string): string {
    const [localPart, domainPart] = correo1.split('@');
  
    if (localPart.length < 3) return correo1;
  
    const visiblePart = localPart.slice(0, 3);
    const hiddenPart = '*'.repeat(localPart.length - 3); 
  
    return `${visiblePart}${hiddenPart}@${domainPart}`;
  }
  

  validarCodigo() {
    if (this.codigoIngresado === this.codigoEsperado) {
      this.validarUsuario();
    } else {
      this.mensajeError = 'Código inválido. Por favor, intente nuevamente.';
    }
  }

  validarUsuario() {
    const body = {
      accion: 'validacion',
      correo: this.correo,
      clave: localStorage.getItem('userPassword')      
    };

    const headers = new HttpHeaders({
      'Authorization': ''
    });

    this.http.post(this.apiUrl, body, { headers })
      .subscribe(
        (response: any) => {
          if (response.success) {
            this.enviarCorreo();
            this.navCtrl.navigateRoot('/iniciar-sesion');
          } else {
            this.mensajeError = response.message || 'Error en la validación del usuario.';
          }
        },
        (error) => {
          console.error('Error al validar el usuario', error);
          this.mensajeError = 'Hubo un problema al conectar con el servidor. Intenta nuevamente.';
        }
      );
  }

  enviarCorreo() {

    const usuarioData = localStorage.getItem('usuarioData');
  

    const usuario = usuarioData ? JSON.parse(usuarioData) : null;
  
   
    const templateParams = {
      name: usuario ? usuario.nombre : 'Usuario', 
      code: this.codigoEsperado,
      to_email: this.correo
    };
  
    emailjs.send('service_b24ho2k', 'template_vrbmm0s', templateParams, '0c3MYYTcXyRx_KHVG')
      .then((response) => {
        console.log('Correo enviado con éxito:', response);
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        this.mensajeError = 'No se pudo enviar el correo. Intenta nuevamente.';
      });
  }
  
  
}
