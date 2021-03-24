import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';


import { HomeComponent } from '../componentes/home/home.component'
import { ResultadosComponent } from './resultados/resultados.component';

@NgModule({
  declarations: [
    HomeComponent,
    ResultadosComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: []
})
export class ComponentesModule { }
