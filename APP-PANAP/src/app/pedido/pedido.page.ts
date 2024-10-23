import { Component, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage{
  @Input() idNegocio: string ='';
  r_valor: string ='';
  nombre_r: string ='';
  apellido_r: string ='';

  apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';

  constructor(private http: HttpClient, private modalCtrl: ModalController) {}

  enviarDatos() {
    const body = {
      accion: 'registrarDatosNegocio',
      ID_NEGOCIO: this.idNegocio,
      R_CODIGO: 'JkSoSP',
      R_VALOR: this.r_valor,
      NOMBRE_R: this.nombre_r,
      APELLIDO_R: this.apellido_r
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': ''
    });

    this.http.post(this.apiUrl, body, { headers: headers }).subscribe(
      response => {
        console.log('Datos enviados exitosamente:', response);
        this.modalCtrl.dismiss();
      },
      error => {
        console.error('Error al enviar los datos:', error);
      }
    );
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }
}