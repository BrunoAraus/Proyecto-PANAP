import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IonIcon, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-tabs-admin',
  templateUrl: './tabs-admin.component.html',
  styleUrls: ['./tabs-admin.component.scss'],
  standalone: true,
  imports: [
    IonTabs, IonTabButton, IonTabBar, IonIcon
  ]
})
export class TabsAdminComponent  implements OnInit {
  activeTab: string = 'home-admin';
  isAnimating: boolean = false;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const currentUrl = event.url;
      
      if (currentUrl.includes('home-admin')) {
        this.activeTab = 'home-admin';
      } else if (currentUrl.includes('solicitudes-negocio')) {
        this.activeTab = 'solicitudes-negocio';
      } else if (currentUrl.includes('listado-negocios')) {
        this.activeTab = 'listado-negocios';
      } else if (currentUrl.includes('cerrar-sesion-adm')) {
        this.activeTab = 'cerrar-sesion-adm';
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
