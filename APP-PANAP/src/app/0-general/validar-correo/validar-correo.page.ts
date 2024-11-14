import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-validar-correo',
  templateUrl: './validar-correo.page.html',
  styleUrls: ['./validar-correo.page.scss'],
})
export class ValidarCorreoPage implements OnInit {
  correo: string = '';
  errorCorreo: string = ''; // Mensaje de error para el correo

  ngOnInit() { 
  }
  
  
  constructor(private navCtrl: NavController, private http: HttpClient) {
  }
    // Validar el formato del correo
    esCorreoValido(): boolean {
      const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return correoRegex.test(this.correo);
    }
  validarCodigo() {
    if (this.esCorreoValido()) {
      // Si el correo es válido, guardarlo y navegar a la siguiente página
      localStorage.setItem('correo', this.correo);
      this.navCtrl.navigateRoot('/validar-codigo-contra');
    } else {
      // Si el correo no es válido, mostrar un mensaje de error
      this.errorCorreo = 'Por favor, ingrese un correo electrónico válido';
    }
  }
}
