import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-pruebas-api',
  templateUrl: './pruebas-api.page.html',
  styleUrls: ['./pruebas-api.page.scss'],
})
export class PruebasApiPage {
  usuario: any = { nombre: '', apellido: '' };
  historico: any[] = [];
  totalGastado: number = 0;
  panFavorito: string | null = null;
  totalHallulla: number = 0;
  totalMarraqueta: number = 0;
  apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.reconectar()
    this.cargarDatos();
  }

  cargarDatos() {
    const usuarioData = localStorage.getItem('usuarioData');
    const historicoData = localStorage.getItem('historicoData');

    if (usuarioData) {
      this.usuario = JSON.parse(usuarioData);
    }

    if (historicoData) {
      this.historico = JSON.parse(historicoData);
      this.calcularResumen();
    }
  }
  reconectar() {
    const correo = localStorage.getItem('userEmail');
    const clave = localStorage.getItem('userPassword');

    if (correo && clave) {
      const body = {
        accion: 'login',
        correo: correo,
        clave: clave
      };

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': ''
      });

    
      this.http.post(this.apiUrl, body, { headers: headers })
        .subscribe(
          (response: any) => {
            if (response.success) {
              console.log('Reconexión exitosa:', response.message);

              
              const usuarioData = response.user;

              const historicoData = response.historicos;

              localStorage.setItem('usuarioData', JSON.stringify(usuarioData));
              localStorage.setItem('historicoData', JSON.stringify(historicoData));

            
              this.usuario = usuarioData;
              this.historico = historicoData;
            } else {
              console.log('Error en la reconexión:', response.message);
            }
          },
          (error) => {
            console.error('Error al intentar reconectar:', error);
          }
        );
    } else {
      console.error('No hay credenciales guardadas para reconectar.');
    }
  }
  calcularResumen() {
    if (!this.historico || this.historico.length === 0) {
      this.totalGastado = 0;
      this.panFavorito = null;
      this.totalHallulla = 0;
      this.totalMarraqueta = 0;
      return;
    }
  
    
    this.totalGastado = this.historico.reduce((total, reserva) => total + (reserva.R_VALOR || 0), 0);
  
    
    const tiposDePan = this.historico.reduce((contadores, reserva) => {
      const tipoPan = reserva.TIPO_PAN;
      if (tipoPan) {
        contadores[tipoPan] = (contadores[tipoPan] || 0) + 1;
      }
      return contadores;
    }, {});
  
    console.log('Contadores de pan:', tiposDePan);  
  
    
    this.panFavorito = Object.keys(tiposDePan).reduce((max, tipo) => {
      if (tiposDePan[tipo] > tiposDePan[max]) {
        return tipo;
      }
      return max;
    }, Object.keys(tiposDePan)[0]);  
  
    console.log('Tipo de pan más solicitado:', this.panFavorito);  
  
    
    this.panFavorito = this.panFavorito || 'Sin preferencias';
  
   
    this.totalHallulla = this.historico.reduce((total, reserva) => total + (reserva.HALLULLA || 0), 0);
    this.totalMarraqueta = this.historico.reduce((total, reserva) => total + (reserva.MARRAQUETA || 0), 0);
  }
  
  
}  