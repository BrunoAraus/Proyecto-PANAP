import { Component, OnInit } from '@angular/core';
import { IonIcon, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs-negocio',
  templateUrl: './tabs-negocio.component.html',
  styleUrls: ['./tabs-negocio.component.scss'],
  standalone: true,
  imports: [
    IonTabs, IonTabButton, IonTabBar, IonIcon
  ]
})
export class TabsNegocioComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
