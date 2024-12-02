import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { IonIcon, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-tabs-negocio',
  templateUrl: './tabs-negocio.component.html',
  styleUrls: ['./tabs-negocio.component.scss'],
  standalone: true,
  imports: [
    IonTabs, IonTabButton, IonTabBar, IonIcon
  ]
})
export class TabsNegocioComponent implements OnInit {
  activeTab: string = 'home-negocio';
  isAnimating: boolean = false;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const currentUrl = event.url;
      
      if (currentUrl.includes('home-negocio')) {
        this.activeTab = 'home-negocio';
      } else if (currentUrl.includes('reservas-negocio') || 
                 currentUrl.includes('reservas-dia') || 
                 currentUrl.includes('historial-reservas')) {
        this.activeTab = 'reservas-negocio';
      } else if (currentUrl.includes('ingreso-pan-negocio')) {
        this.activeTab = 'ingreso-pan-negocio';
      } else if (currentUrl.includes('modificar-pan-negocio')) {
        this.activeTab = 'modificar-pan-negocio';
      } else if (currentUrl.includes('menu-negocio') || 
                 currentUrl.includes('cambiar-informacion-neg') ||
                 currentUrl.includes('preguntas-frecuentes') ||
                 currentUrl.includes('cerrar-sesion-neg') ||
                 currentUrl.includes('contacto')) {
        this.activeTab = 'menu-negocio';
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
