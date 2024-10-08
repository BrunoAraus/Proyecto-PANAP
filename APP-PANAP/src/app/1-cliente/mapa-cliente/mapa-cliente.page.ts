import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-mapa-cliente',
  templateUrl: './mapa-cliente.page.html',
  styleUrls: ['./mapa-cliente.page.scss'],
})
export class MapaClientePage implements OnInit {
  currentLocation: { lat: number; lng: number } | null = null;
  map: any; 
  markers: any[] = []; 

  constructor() {}

  ngOnInit() {
    this.getCurrentLocation().then(() => {
      if (this.currentLocation) {
        this.loadMap();
      } else {
        console.error('No se puede obtener la ubicacion');
      }
    });
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
    const mapContainer = document.getElementById('mapaPan') as HTMLElement;

    this.map = new google.maps.Map(mapContainer, {
      center: this.currentLocation || { lat: 0, lng: 0 },
      zoom: 19,
      disableDefaultUI: true,
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

    if (this.currentLocation) {
      this.addMarker(this.currentLocation, 'Mi Ubicación', true);
    }
  }

  addMarker(location: { lat: number; lng: number }, title: string, isFixed: boolean = false) {
    const marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: title,
      icon: {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        scale: 6,
        fillColor: isFixed ? 'blue' : 'red',
        fillOpacity: 1,
        strokeColor: 'white',
        strokeWeight: 2,
      },
    });

    if (!isFixed) {
      this.markers.push(marker);
    }
  }
}
