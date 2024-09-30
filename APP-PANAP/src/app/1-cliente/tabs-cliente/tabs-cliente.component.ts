import { Component, OnInit } from '@angular/core';
import { IonIcon, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs-cliente',
  templateUrl: './tabs-cliente.component.html',
  styleUrls: ['./tabs-cliente.component.scss'],
  standalone: true,
  imports: [
    IonTabs, IonTabButton, IonTabBar, IonIcon
  ]
})
export class TabsClienteComponent  implements OnInit {

  animateIcon(event: any) {
    const icon = event.target; // Obtener el ícono clickeado
    icon.classList.add('icon-animate');

    // Remover la clase después de que la animación termine
    setTimeout(() => {
      icon.classList.remove('icon-animate');
    }, 300); // La duración debe coincidir con la duración de la animación
  }

  ngOnInit() {}

}
