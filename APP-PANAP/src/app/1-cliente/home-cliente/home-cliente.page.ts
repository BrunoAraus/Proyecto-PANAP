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
  

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  ngOnInit() {
    this.cargarDatos();
  }

  ngOnDestroy() {
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
}
