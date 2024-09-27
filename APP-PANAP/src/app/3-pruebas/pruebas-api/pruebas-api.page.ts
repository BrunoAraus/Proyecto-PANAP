import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-pruebas-api',
  templateUrl: './pruebas-api.page.html',
  styleUrls: ['./pruebas-api.page.scss'],
})
export class PruebasApiPage {
  apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';

  usuario: string = '';
  clave: string = '';
  correo: string = '';
  tipo: string = '';

  constructor(private http: HttpClient) {}

  probarAPI() {
    const body = {
      usuario: this.usuario,
      clave: this.clave,
      correo: this.correo,
      tipo: this.tipo,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': ''
    });

    this.http.post(this.apiUrl, body, { headers: headers })
      .subscribe(response => {
        console.log('Respuesta de la API:', response);
      }, error => {
        console.error('Error al consumir la API:', error);
      });
  }
}
