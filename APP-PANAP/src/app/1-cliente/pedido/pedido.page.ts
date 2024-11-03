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
  tipo: string = '';
  errorMensaje: string = '';

  formularioActual: 'cantidad' | 'moneda' = 'cantidad';

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

  seleccionarFormulario(tipo: 'cantidad' | 'moneda') {
    this.formularioActual = tipo;
  }

  cerrarPopover() {
    this.popoverController.dismiss();
  }

  formatearNumero(event: any) {
    let valor = event.target.value;
    
    // Verifica si el valor contiene solo números
    if (/^\d*$/.test(valor)) {
      // Si solo hay números, limita a cinco dígitos
      this.errorMensaje = ''; // Limpia el mensaje de error
      this.r_valor = valor.substring(0, 5); // Limita a cinco dígitos
    } else {
      // Si contiene caracteres no numéricos, muestra un mensaje de error
      this.errorMensaje = 'Por favor, ingresa solo números';
    }
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

  enviarFormularioCantidad() {
    const codigoAleatorio = this.generarCodigoAleatorio();

    const body = {
      accion: 'registrarDatosNegocio',
      ID_NEGOCIO: this.idNegocio,
      R_CODIGO: codigoAleatorio,
      R_VALOR: '0',
      NOMBRE_R: this.usuario.nombre,
      APELLIDO_R: this.usuario.apellido,
      ID_USUARIO: this.usuario.id,
      HALLULLA: 'NULL',
      MARRAQUETA: 'NULL',
      TIPO_PAN: this.tipo
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': ''
    });

    this.http.post(this.apiUrl, body, { headers: headers }).subscribe(
      response => {
        console.log('Datos de cantidad enviados exitosamente:', response);
        this.popoverController.dismiss();
      },
      error => {
        console.error('Error al enviar los datos de cantidad:', error);
      }
    );
  }

  enviarFormularioMoneda() {
    const codigoAleatorio = this.generarCodigoAleatorio();

    const body = {
      accion: 'registrarDatosNegocio',
      ID_NEGOCIO: this.idNegocio,
      R_CODIGO: codigoAleatorio,
      R_VALOR: '0',
      NOMBRE_R: this.usuario.nombre,
      APELLIDO_R: this.usuario.apellido,
      ID_USUARIO: this.usuario.id,
      HALLULLA: this.hallulla,
      MARRAQUETA: this.marraqueta,
      TIPO_PAN: 'NO'
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': ''
    });

    this.http.post(this.apiUrl, body, { headers: headers }).subscribe(
      response => {
        console.log('Datos de moneda enviados exitosamente:', response);
        this.popoverController.dismiss();
      },
      error => {
        console.error('Error al enviar los datos de moneda:', error);
      }
    );
  }
}
