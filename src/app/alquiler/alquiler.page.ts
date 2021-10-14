import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../api/servicio.service';

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.page.html',
  styleUrls: ['./alquiler.page.scss'],
})
export class AlquilerPage implements OnInit {
  public items ;

  constructor(public servicio: ServicioService) { }

  ngOnInit() {
    this.servicio.getCatalogo().then(
      data => {
        this.items = data ;
      }
    ).catch(
      error => {
        console.error(error);
      });
  }

}
