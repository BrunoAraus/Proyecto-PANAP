import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PedidoPage } from 'src/app/pedido/pedido.page';
declare var google: any;

@Component({
  selector: 'app-pedido-cliente',
  templateUrl: './pedido-cliente.page.html',
  styleUrls: ['./pedido-cliente.page.scss'],
})
export class PedidoClientePage implements OnInit {
  currentLocation: { lat: number; lng: number } | null = null;
  map: any;
  markers: any[] = [];
  usuario: any;
  negocios: any[] = [];
  apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';
  intervalId: any;
  directionsService: any;
  directionsRenderer: any;
  activeRouteMarker: any = null;

  constructor(
    private http: HttpClient, 
    private navCtrl: NavController, 
    private modalCtrl: ModalController 
  ) {}
  
  ngOnInit() {
    this.getCurrentLocation().then(() => {
      if (this.currentLocation) {
        this.loadMap();
      } else {
        console.error('No se puede obtener la ubicación');
      }
    });
    this.reconectar();
    this.cargarDatos();
    this.intervalId = setInterval(() => {
      this.reconectar();
      this.cargarDatos();
    }, 60000);
  }

  cargarDatos() {
    const usuarioData = localStorage.getItem('usuarioData');
    const negociosData = localStorage.getItem('negociosData');

    if (usuarioData) {
      this.usuario = JSON.parse(usuarioData);
    }

    if (negociosData) {
      this.negocios = JSON.parse(negociosData);
      console.log('Datos de negocios cargados:', this.negocios);
      this.agregarMarcadoresNegocios();
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
              const negociosData = response.negocios;

              localStorage.setItem('usuarioData', JSON.stringify(usuarioData));
              localStorage.setItem('negociosData', JSON.stringify(negociosData));

              this.usuario = usuarioData;
              this.negocios = negociosData;
              this.agregarMarcadoresNegocios();
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

  getCurrentLocation(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          resolve();
        }, error => {
          console.error('Error obteniendo la localización:', error);
          reject(error);
        });
      } else {
        console.error('Error en Geolocalización');
        reject(new Error('Error en Geolocalización'));
      }
    });
  }

  loadMap() {
    const mapContainer = document.getElementById('mapaPedido') as HTMLElement;

    this.map = new google.maps.Map(mapContainer, {
      center: this.currentLocation || { lat: 0, lng: 0 },
      zoom: 15,
      styles: [
        {
          featureType: 'all',
          elementType: 'geometry',
          stylers: [{ visibility: 'on' }],
        },
        {
          featureType: 'all',
          elementType: 'labels',
          stylers: [{ visibility: 'on' }],
        },
        {
          featureType: 'poi',
          stylers: [{ visibility: 'off' }],
        },
        {
          featureType: 'transit',
          stylers: [{ visibility: 'off' }],
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#00BFFF' }],
        },
      ],
    });
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.directionsRenderer.setMap(this.map);

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      console.log('Mapa cargado completamente');
      if (this.currentLocation) {
        this.addMarker(this.currentLocation, 'Mi Ubicación', true);
      }
      this.agregarMarcadoresNegocios();
    });
  }

  agregarMarcadoresNegocios() {
    console.log('Agregando marcadores para los negocios:', this.negocios);
    this.negocios.forEach(negocio => {
      const latitud = negocio.LATITUD;
      const longitud = negocio.LONGITUD;

      if (latitud && longitud) {
        console.log(`Agregando marcador para: ${negocio.N_NOMBRE} en (${latitud}, ${longitud})`);
        this.addMarker({ lat: latitud, lng: longitud }, `Negocio: ${negocio.N_NOMBRE}`, false, negocio);
      } else {
        console.warn(`Datos de ubicación faltantes para: ${negocio.N_NOMBRE}`);
      }
    });
  }

  async abrirDetalleNegocioModal(negocio: any) {
    const modal = await this.modalCtrl.create({
      component: PedidoPage,
      componentProps: { 
        idNegocio: negocio.ID_NEGOCIO 
      }
    });
    return await modal.present();
  }

  addMarker(location: { lat: number; lng: number }, title: string, isFixed: boolean = false, negocio?: any) {
    const marker = new google.maps.Marker({
      position: location,
      map: this.map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: isFixed ? 'blue' : 'red',
        fillOpacity: 0.8,
        strokeColor: 'white',
        strokeWeight: 2,
        labelOrigin: new google.maps.Point(0, 2)
      },
      label: {
        text: title,
        color: 'black',
        fontSize: '90%',
        fontWeight: 'bold',
      }
    });

    if (negocio) {
      google.maps.event.addListener(marker, 'click', () => {
        this.abrirDetalleNegocioModal(negocio);
      });
    }

    if (!isFixed) {
      this.markers.push(marker);
    }
  }
}
