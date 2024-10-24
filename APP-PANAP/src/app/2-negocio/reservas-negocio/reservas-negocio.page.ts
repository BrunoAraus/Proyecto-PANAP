import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reservas-negocio',
  templateUrl: './reservas-negocio.page.html',
  styleUrls: ['./reservas-negocio.page.scss'],
})
export class ReservasNegocioPage implements OnInit {
  constructor(private http: HttpClient, private navCtrl: NavController) {}

  ngOnInit() {
  }
}