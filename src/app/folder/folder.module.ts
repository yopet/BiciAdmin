import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';


import { FolderPage } from './folder.page';

import {CatalogoPage } from '../catalogo/catalogo.page'
import {AlquilerPage } from '../alquiler/alquiler.page'
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage ,CatalogoPage ,AlquilerPage]
})
export class FolderPageModule {}
