import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-informacion-negocio-foto',
  templateUrl: './informacion-negocio-foto.page.html',
  styleUrls: ['./informacion-negocio-foto.page.scss'],
})
export class InformacionNegocioFotoPage {
  selectedFile: File | null = null;
  usuario: any;
  errorFoto: string = '';
  apiUrl = 'https://panapp.duckdns.org/rest/FOTO.php';

  constructor(private http: HttpClient, private navCtrl: NavController) { }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.errorFoto = ''; 
    }
  }
  

  uploadPhoto() {
    if (!this.selectedFile) {
      this.errorFoto = 'Por favor selecciona una imagen de tu negocio antes de continuar.';
      return;  // Detener la ejecución si no se seleccionó un archivo
    }


    if (this.selectedFile) {
      const usuarioData = localStorage.getItem('usuarioData');
      if (usuarioData) {
        this.usuario = JSON.parse(usuarioData); 
      }
      const formData = new FormData();

      formData.append('accion', 'subirFoto');
      formData.append('id_usuario', this.usuario.id);
      formData.append('foto', this.selectedFile);

      const headers = new HttpHeaders({
        'Authorization': ''
      });

      this.http.post(this.apiUrl, formData, { headers: headers }).subscribe(
        (response: any) => {
          if (response.success) {
            alert('Foto subida correctamente');
            this.navCtrl.navigateBack('/confirmacion-negocio');
          } else {
            alert('Error al subir la foto: ' + response.message);
          }
        },
        (error) => {
          console.error('Error en la solicitud:', error);
          alert('Error al conectarse con el servidor.');
        }
      );
    } else {
      alert('Por favor selecciona una imagen primero.');
    }
  }

}
