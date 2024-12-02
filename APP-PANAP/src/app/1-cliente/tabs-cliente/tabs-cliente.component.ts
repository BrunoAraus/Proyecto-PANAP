import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { IonIcon, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-tabs-cliente',
  templateUrl: './tabs-cliente.component.html',
  styleUrls: ['./tabs-cliente.component.scss'],
  standalone: true,
  imports: [
    IonTabs, IonTabButton, IonTabBar, IonIcon
  ]
})
export class TabsClienteComponent implements OnInit {
  activeTab: string = 'home-cliente';
  isAnimating: boolean = false;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const currentUrl = event.url;
      
      if (currentUrl.includes('home-cliente')) {
        this.activeTab = 'home-cliente';
      } else if (currentUrl.includes('reservas-cliente')) {
        this.activeTab = 'reservas-cliente';
      } else if (currentUrl.includes('buscar-pan')) {
        this.activeTab = 'buscar-pan';
      } else if (currentUrl.includes('menu-cliente') || 
                 currentUrl.includes('cambiar-informacion-cli') ||
                 currentUrl.includes('preguntas-frecuentes') ||
                 currentUrl.includes('cerrar-sesion-cli') ||
                 currentUrl.includes('contacto')) {
        this.activeTab = 'menu-cliente';
      }
    });
  }

  onTabClick(event: any, tabId: string) {
    if (this.isAnimating) return;
    
    const tabButton = event.currentTarget;
    this.isAnimating = true;
    
    tabButton.classList.add('tab-animate');
    
    setTimeout(() => {
      this.activeTab = tabId;
      tabButton.classList.remove('tab-animate');
      this.isAnimating = false;
    }, 500);
  }

  ngOnInit() {}
}
