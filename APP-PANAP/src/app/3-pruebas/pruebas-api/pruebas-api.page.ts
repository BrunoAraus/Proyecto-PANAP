import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-pruebas-api',
  templateUrl: './pruebas-api.page.html',
  styleUrls: ['./pruebas-api.page.scss'],
})
export class PruebasApiPage {
  selectedFile: File | null = null;
  usuario: any;
  apiUrl = 'https://panapp.duckdns.org/rest/FOTO.php'; 


  constructor(private http: HttpClient, private navCtrl: NavController) { }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  uploadPhoto() {
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