import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Catalogo', url: '/folder/Catalogo', icon: 'bicycle' },
    { title: 'Alquileres', url: '/folder/Alquileres', icon: 'calendar' }
  ];
 
  constructor() {}
}
