import { Component, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController, PopoverController } from '@ionic/angular';

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

  formularioActual: 'cantidad' | 'moneda' = 'moneda';

  apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';

  mostrarAnimacion: boolean = false;
  animacionSalida: boolean = false;

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
    this.r_valor = '';
    this.hallulla = '';
    this.marraqueta = '';
    this.tipo = '';
    this.errorMensaje = '';
    this.errorMensajeHallulla = '';
    this.errorMensajeMarraqueta = '';
    this.errorFormato = '';
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
      this.r_valor = valor.substring(0, 4); // Limita a cinco dígitos
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
    if (this.formularioActual !== 'cantidad') return;

    // Convertir los valores a números
    const hallullaNum = parseInt(this.hallulla) || 0;
    const marraquetaNum = parseInt(this.marraqueta) || 0;

    // Validar que al menos uno de los dos sea mayor que 0
    if (hallullaNum === 0 && marraquetaNum === 0) {
      this.errorMensajeHallulla = 'Debe pedir al menos un tipo de pan';
      this.errorMensajeMarraqueta = 'Debe pedir al menos un tipo de pan';
      return;
    }

    // Limpiar mensajes de error si todo está bien
    this.errorMensajeHallulla = '';
    this.errorMensajeMarraqueta = '';

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

    this.enviarPeticion(body);
  }

  enviarFormularioMoneda() {
    if (this.formularioActual !== 'moneda') return;

    if (!this.r_valor || this.r_valor === '0' || this.r_valor === '') {
      this.errorMensaje = 'Por favor, ingresa un monto válido mayor a 0';
      return;
    }

    if (!this.tipo) {
      this.errorFormato = 'Por favor, elige un formato para continuar.';
      return;
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

    this.enviarPeticion(body);
  }

  private enviarPeticion(body: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': ''
    });

    this.http.post(this.apiUrl, body, { headers: headers }).subscribe(
      response => {
        console.log('Datos enviados exitosamente:', response);
        this.mostrarAnimacion = true;

        setTimeout(() => {
          this.animacionSalida = true;
          setTimeout(() => {
            this.navCtrl.navigateRoot('/tabs-cliente/pedido-cliente');
            this.popoverController.dismiss({actualizar: true});
          }, 500);
        }, 2000);
      },
      error => {
        console.error('Error al enviar los datos:', error);
      }
    );
  }
}
