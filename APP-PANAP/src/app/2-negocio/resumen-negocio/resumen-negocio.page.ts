import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'chart.js/auto';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-resumen-negocio',
  templateUrl: './resumen-negocio.page.html',
  styleUrls: ['./resumen-negocio.page.scss'],
})
export class ResumenNegocioPage implements OnInit {
  @ViewChild(IonContent) content!: IonContent;
  showScrollTop: boolean = false;
  
  usuario: any = { nombre: '', apellido: '' };
  totalGastado: number = 0;
  panFavorito: string | null = null;
  totalHallulla: number = 0;
  totalMarraqueta: number = 0;
  negocios: any[] = [];
  historico: any[] = [];
  preferenciaTipo: string | null = null;
  apiUrl = 'https://panapp.duckdns.org/rest/API_PRUEBA.php';

  hallullasMarraquetasChart: any;
  tipoReservaChart: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.reconectar();
    this.cargarDatos();
  }

  onScroll(event: any) {
    const scrollTop = event.detail.scrollTop;
    this.showScrollTop = scrollTop > window.innerHeight / 2;
  }

  scrollToTop() {
    this.content.scrollToTop(500);
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
              const negociosData = response.negocios;
              const historicosData = response.historicos;
              localStorage.setItem('usuarioData', JSON.stringify(usuarioData));
              localStorage.setItem('negociosData', JSON.stringify(negociosData));
              localStorage.setItem('historicosData', JSON.stringify(historicosData));
              this.usuario = usuarioData;
              this.negocios = negociosData;
              this.historico = historicosData;
              this.calcularResumen();
              this.generarGraficos();
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
  cargarDatos() {
    const usuarioData = localStorage.getItem('usuarioData');
    const negociosData = localStorage.getItem('negociosData');
    const historicosData = localStorage.getItem('historicosData');

    if (usuarioData) {
      this.usuario = JSON.parse(usuarioData);
    }

    if (negociosData) {
      this.negocios = JSON.parse(negociosData);
    }

    if (historicosData) {
      this.historico = JSON.parse(historicosData);
      this.calcularResumen();
      this.generarGraficos();
    }
  }

  calcularResumen() {
    if (!this.historico || this.historico.length === 0) {
      this.totalGastado = 0;
      this.panFavorito = null;
      this.preferenciaTipo = null;
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

    this.panFavorito = Object.keys(tiposDePan).reduce((max, tipo) => {
      return tiposDePan[tipo] > tiposDePan[max] ? tipo : max;
    }, Object.keys(tiposDePan)[0]) || 'Sin preferencias';

    const tiposReserva = this.historico.reduce((contadores, reserva) => {
      const tipoReserva = reserva.TIPO;
      if (tipoReserva) {
        contadores[tipoReserva] = (contadores[tipoReserva] || 0) + 1;
      }
      return contadores;
    }, {});

    this.preferenciaTipo = Object.keys(tiposReserva).reduce((max, tipo) => {
      return tiposReserva[tipo] > tiposReserva[max] ? tipo : max;
    }, Object.keys(tiposReserva)[0]) || 'Sin preferencias';

    this.totalHallulla = this.historico.reduce((total, reserva) => total + (reserva.HALLULLA || 0), 0);
    this.totalMarraqueta = this.historico.reduce((total, reserva) => total + (reserva.MARRAQUETA || 0), 0);
  }

  generarGraficos() {
    const reservasPorDia = this.historico.reduce((result, reserva) => {
      const fecha = new Date(reserva.H_FECHA).toLocaleDateString();
      result[fecha] = (result[fecha] || 0) + 1;
      return result;
    }, {});
  
    const fechas = Object.keys(reservasPorDia);
    const cantidades = Object.values(reservasPorDia);
  
    const ctxLine = document.getElementById('lineChart') as HTMLCanvasElement;
    if (ctxLine) {
      new Chart(ctxLine, {
        type: 'line',
        data: {
          labels: fechas,
          datasets: [
            {
              label: 'Reservas por Día',
              data: cantidades,
              borderColor: '#36A2EB',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              fill: true,
              borderWidth: 3,
              pointRadius: 6,
              pointHoverRadius: 8,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { 
              display: true,
              labels: {
                font: {
                  size: 14
                }
              }
            },
          },
          scales: {
            x: { 
              title: { 
                display: true, 
                text: 'Fecha',
                font: {
                  size: 14
                }
              },
              ticks: {
                font: {
                  size: 12
                },
                maxRotation: 45,
                minRotation: 45
              }
            },
            y: {
              title: { 
                display: true, 
                text: 'Cantidad de Reservas',
                font: {
                  size: 14
                }
              },
              beginAtZero: true,
              ticks: { 
                stepSize: 1, 
                callback: (value) => Number(value).toFixed(0),
                font: {
                  size: 12
                }
              },
            },
          },
        },
      });
    }
    const ctxPie = document.getElementById('tipoReservaChart') as HTMLCanvasElement;
    if (ctxPie) {
      const tiposReserva = {
        MONEDA: this.historico.filter((reserva) => reserva.TIPO === 'MONEDA').length,
        CANTIDAD: this.historico.filter((reserva) => reserva.TIPO === 'CANTIDAD').length,
      };
  
      new Chart(ctxPie, {
        type: 'pie',
        data: {
          labels: ['Moneda', 'Cantidad'],
          datasets: [
            {
              data: [tiposReserva.MONEDA, tiposReserva.CANTIDAD],
              backgroundColor: ['#FFCE56', '#4BC0C0'],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { 
              display: true,
              position: 'bottom',
              onClick: (event: any, legendItem: any, legend: any) => {
                console.log('Legend item clicked:', legendItem);
              },
              labels: {
                boxWidth: 15,
                padding: 15,
                font: {
                  size: 14
                },
                generateLabels: function(chart: any) {
                  const datasets = chart.data.datasets[0];
                  return [{
                    text: `Moneda: ${datasets.data[0]}`,
                    fillStyle: datasets.backgroundColor[0],
                    hidden: false,
                    index: 0,
                    lineWidth: 0
                  }, {
                    text: `Cantidad: ${datasets.data[1]}`,
                    fillStyle: datasets.backgroundColor[1],
                    hidden: false,
                    index: 1,
                    lineWidth: 0
                  }];
                },
                usePointStyle: false
              }
            },
            tooltip: {
              enabled: true
            }
          },
          events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
        },
      });
    }
  }

  formatearNumero(numero: number): string {
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  formatearCapital(texto: string): string {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }
  

}
