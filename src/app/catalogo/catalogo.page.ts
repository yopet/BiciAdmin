import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../api/servicio.service';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
  public items;
  public itemsO ;
  public filtro = {
    tipo:'',
    categoria:''
  }

  constructor(public servicio: ServicioService) { }

  ngOnInit() {
    this.servicio.getCatalogo().then(
      data => {
        this.itemsO = data ;
        this.items = this.itemsO;
      }
    ).catch(
      error => {
        console.error(error);
      });
  }
  onChange() {
    if(this.filtro.tipo == 'Todas' && this.filtro.categoria == 'Todas'){
      this.items = this.itemsO;
    }else if(this.filtro.tipo == 'Todas'){
      this.items = this.itemsO.filter(item => item.categoria == this.filtro.categoria);
    }else if(this.filtro.categoria == 'Todas'){
      this.items = this.itemsO.filter(item => item.tipo == this.filtro.tipo );
    }else{
      this.items = this.itemsO.filter(item => item.tipo == this.filtro.tipo && item.categoria == this.filtro.categoria);
    }
   
    console.log(this.filtro);
  }

}
