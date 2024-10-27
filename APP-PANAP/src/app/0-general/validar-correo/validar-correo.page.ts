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

  ngOnInit() { 
  }
  
  constructor(private navCtrl: NavController, private http: HttpClient) {
  }
  

  validarCodigo() {
      localStorage.setItem('correo', this.correo);
      this.navCtrl.navigateRoot('/validar-codigo-contra');
  }
}

