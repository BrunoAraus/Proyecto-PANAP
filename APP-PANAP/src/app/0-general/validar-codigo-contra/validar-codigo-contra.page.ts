import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-validar-codigo-contra',
  templateUrl: './validar-codigo-contra.page.html',
  styleUrls: ['./validar-codigo-contra.page.scss'],
})
export class ValidarCodigoContraPage implements OnInit {

  codigoIngresado: string = '';
  codigoEsperado: string = '';
  mensajeError: string = '';
  correo: string = '';
  correoCensurado: string = '';

  ngOnInit() { 
    this.generarCodigoAleatorio();
    this.enviarCorreo()

  }

  constructor(private navCtrl: NavController, private http: HttpClient) {
    this.correoCensurado = this.censurarEmail(this.correo);
  }

  censurarEmail(correo: string): string {
    const [localPart, domainPart] = correo.split('@');
    if (localPart.length < 3) return correo;
    const visiblePart = localPart.slice(0, 3);
    const hiddenPart = '*'.repeat(localPart.length - 3); 
    return `${visiblePart}${hiddenPart}@${domainPart}`;
  }

  generarCodigoAleatorio(): void {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    this.codigoEsperado = Array.from({ length: 5 }, () => 
      caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    ).join('');
  }

  validarCodigo() {
    if (this.codigoIngresado === this.codigoEsperado) {
      this.navCtrl.navigateRoot('/restablecer-contra');
    } else {
      this.mensajeError = 'Código inválido. Por favor, intente nuevamente.';
    }
  }

  enviarCorreo() {
    this.generarCodigoAleatorio(); 
    const templateParams = {
      name: localStorage.getItem('correo'), 
      code: this.codigoEsperado,
      to_email: localStorage.getItem('correo')
    };
  
    emailjs.send('service_b24ho2k', 'template_jdgcpym', templateParams, '0c3MYYTcXyRx_KHVG')
      .then((response) => {
        console.log('Correo enviado con éxito:', response);
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        this.mensajeError = 'No se pudo enviar el correo. Intenta nuevamente.';
      });
  }
  
}
