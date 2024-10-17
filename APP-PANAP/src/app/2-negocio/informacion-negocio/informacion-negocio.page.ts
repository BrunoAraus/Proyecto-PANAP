import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-informacion-negocio',
  templateUrl: './informacion-negocio.page.html',
  styleUrls: ['./informacion-negocio.page.scss'],
})
export class InformacionNegocioPage {

  errorMensaje: string = '';
  usuario: any;

  negocio = {
    nombre: '',
    numero: '',
    efectivo: false,
    tarjeta: false,
    transferencia: false
  };

  apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';
  intervalId: any;

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  ngOnInit() {
    this.reconectar();
    this.cargarDatos();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  cargarDatos() {
    const usuarioData = localStorage.getItem('usuarioData');

    if (usuarioData) {
      this.usuario = JSON.parse(usuarioData); 
    }
  }

  reconectar() {
    const correo = localStorage.getItem('userEmail');
    const clave = localStorage.getItem('userPassword');

    if (correo && clave) {
      const body = {
        accion: 'iniciarnegocio',
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
              localStorage.setItem('usuarioData', JSON.stringify(usuarioData));
              this.usuario = usuarioData;
            } else {
              console.log('Error en la reconexión:', response.message);
              const alerta = document.getElementById("alertaError");
              if (alerta) {
                alerta.classList.add("show");
                setTimeout(() => {
                  alerta.classList.remove("show");
                }, 3000);
              }
            }
          },
          (error) => {
            console.error('Error al intentar reconectar:', error);
            const alerta = document.getElementById("alertaError");
            if (alerta) {
              alerta.classList.add("show");
              setTimeout(() => {
                alerta.classList.remove("show");
              }, 3000);
            }
          }
        );
    } else {
      console.error('No hay credenciales guardadas para reconectar.');
    }
  }

  registrarNegocio() {
    if (this.usuario && this.usuario.id) {
      const body = {
        accion: 'registron',
        n_nombre: this.negocio.nombre,
        n_numero: this.negocio.numero,
        id_usuario: this.usuario.id,
        efectivo: this.negocio.efectivo ? 1 : 0,
        tarjeta: this.negocio.tarjeta ? 1 : 0,
        transferencia: this.negocio.transferencia ? 1 : 0
      };

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': ''
      });

      this.http.post(this.apiUrl, body, { headers: headers })
        .subscribe(
          (response: any) => {
            if (response.success) {
              console.log('Negocio registrado correctamente:', response.message);
              this.navCtrl.navigateBack('/pruebas-api'); 
            } else {
              this.errorMensaje = 'Error al registrar el negocio: ' + response.message;
              const alerta = document.getElementById("alertaError");
              if (alerta) {
                alerta.classList.add("show");
                setTimeout(() => {
                  alerta.classList.remove("show");
                }, 3000);
              }
            }
          },
          (error) => {
            console.error('Error al registrar el negocio:', error);
            this.errorMensaje = 'Ocurrió un error al registrar el negocio.';
            const alerta = document.getElementById("alertaError");
            if (alerta) {
              alerta.classList.add("show");
              setTimeout(() => {
                alerta.classList.remove("show");
              }, 3000);
            }
          }
        );
    } else {
      this.errorMensaje = 'Usuario no autenticado.';
      const alerta = document.getElementById("alertaError");
            if (alerta) {
              alerta.classList.add("show");
              setTimeout(() => {
                alerta.classList.remove("show");
              }, 3000);
            }
    }
  }
}
