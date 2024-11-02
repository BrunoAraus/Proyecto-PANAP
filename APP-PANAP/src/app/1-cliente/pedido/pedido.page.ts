import { Component, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage {
  @Input() idNegocio: string = '';
  r_valor: string = '';
  nombre_r: string = '';
  apellido_r: string = '';
  usuario: any;
  hallulla: string = '';
  marraqueta: string = '';
  mixto: string = '';
  tipo: String='';

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

  formatearNumero(event: any) {
    let valor = event.target.value.replace(/\D/g, '');


    if (valor.length > 6) {
      valor = valor.substring(0, 6);
    }


    if (parseInt(valor, 10) >= 1000) {
      valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    this.r_valor = valor;
  }


  private generarCodigoAleatorio(longitud: number = 6): string {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';
    for (let i = 0; i < longitud; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      codigo += caracteres.charAt(indice);
    }
    return codigo;
  }

  enviarDatos() {
    const codigoAleatorio = this.generarCodigoAleatorio(); 

    const body = {
      accion: 'registrarDatosNegocio',
      ID_NEGOCIO: this.idNegocio,
      R_CODIGO: codigoAleatorio,
      R_VALOR: this.r_valor,
      NOMBRE_R: this.usuario.nombre,
      APELLIDO_R: this.usuario.apellido,
      ID_USUARIO: this.usuario.id,
      HALLULLA: this.hallulla,
      MARRAQUETA: this.marraqueta,
      MIXTO: this.mixto,
      TIPO_PAN: this.tipo
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
