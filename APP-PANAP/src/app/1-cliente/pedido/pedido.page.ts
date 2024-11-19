import { Component, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  NavController,PopoverController } from '@ionic/angular';

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
  errorMensajeHallulla: string = '';
  errorMensajeMarraqueta: string = '';  
  errorFormato: string = '';

  formularioActual: 'cantidad' | 'moneda' = 'cantidad';

  apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';

  constructor(
    private http: HttpClient,
    private popoverController: PopoverController,
    private navCtrl: NavController
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
    
 // Validación para Hallulla
 if (/[^0-9]/.test(this.hallulla)) {
  this.errorMensajeHallulla = 'La cantidad de Hallulla no puede contener letras.';
} else if (parseInt(this.hallulla) <= 0 || this.hallulla === '') {
  this.errorMensajeHallulla = 'La cantidad de Hallulla debe ser un número mayor a 0.';
} else {
  this.errorMensajeHallulla = ''; // Limpiar mensaje si es válido
}

// Validación para Marraqueta
if (/[^0-9]/.test(this.marraqueta)) {
  this.errorMensajeMarraqueta = 'La cantidad de Marraqueta no puede contener letras.';
} else if (parseInt(this.marraqueta) <= 0 || this.marraqueta === '') {
  this.errorMensajeMarraqueta = 'La cantidad de Marraqueta debe ser un número mayor a 0.';
} else {
  this.errorMensajeMarraqueta = ''; // Limpiar mensaje si es válido
}

if (!this.tipo) {
  this.errorFormato = 'Por favor, elige un formato para continuar.';
  return;
} else {
  this.errorFormato = ''; // Limpiar mensaje de error si se seleccionó un formato
}
// Detener si hay errores
if (this.errorMensajeHallulla || this.errorMensajeMarraqueta) {
  return;
}
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
      TIPO_PAN: 'NO',
      TIPO: "CANTIDAD"
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': ''
    });

    this.http.post(this.apiUrl, body, { headers: headers }).subscribe(
      response => {
        console.log('Datos de cantidad enviados exitosamente:', response);
        this.popoverController.dismiss();
        this.navCtrl.navigateRoot('/tabs-cliente/pedido-cliente');
      },
      error => {
        console.error('Error al enviar los datos de cantidad:', error);
      }
    );
  }

  enviarFormularioMoneda() {
      // Validación para el tipo de pan (formato)
  if (!this.tipo) {
    this.errorFormato = 'Por favor, elige un formato para continuar.';
    return;
  } else {
    this.errorFormato = ''; // Limpiar mensaje de error si se seleccionó un formato
  }
    const codigoAleatorio = this.generarCodigoAleatorio();

    const body = {
      accion: 'registrarDatosNegocio',
      ID_NEGOCIO: this.idNegocio,
      R_CODIGO: codigoAleatorio,
      R_VALOR: this.r_valor,
      NOMBRE_R: this.usuario.nombre,
      APELLIDO_R: this.usuario.apellido,
      ID_USUARIO: this.usuario.id,
      HALLULLA: "0",
      MARRAQUETA: "0",
      TIPO_PAN: this.tipo,
      TIPO: "MONEDA"
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': ''
    });

    this.http.post(this.apiUrl, body, { headers: headers }).subscribe(
      response => {
        console.log('Datos de moneda enviados exitosamente:', response);
        this.popoverController.dismiss();
        this.navCtrl.navigateRoot('/tabs-cliente/pedido-cliente');
      },
      error => {
        console.error('Error al enviar los datos de moneda:', error);
      }
    );
  }
}
