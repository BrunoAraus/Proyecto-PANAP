import { Component, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PopoverController } from '@ionic/angular';

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
  usuario: any;

  apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';

  constructor(
    private http: HttpClient, 
    private popoverController: PopoverController
  ) {
    const usuarioData = localStorage.getItem('usuarioData');
    if (usuarioData) {
      this.usuario = JSON.parse(usuarioData); 
    }
  }
  
  cerrarPopover() {
    this.popoverController.dismiss();
  }

  enviarDatos() {
    const body = {
      accion: 'registrarDatosNegocio',
      ID_NEGOCIO: this.idNegocio,
      R_CODIGO: 'JkSoSP',
      R_VALOR: this.r_valor,
      NOMBRE_R: this.usuario.nombre,
      APELLIDO_R: this.usuario.apellido,
      ID_USUARIO: this.usuario.id
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': ''
    });

    this.http.post(this.apiUrl, body, { headers: headers }).subscribe(
      response => {
        console.log('Datos enviados exitosamente:', response);
        this.popoverController.dismiss();
      },
      error => {
        console.error('Error al enviar los datos:', error);
      }
    );
  }
}
