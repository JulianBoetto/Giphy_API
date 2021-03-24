import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentesModule } from './componentes/componentes.module';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
      ],
  imports: [
    BrowserModule,
    ComponentesModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
