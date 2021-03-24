import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ResultadosComponent } from './componentes/resultados/resultados.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'resultados/:palabra', component: ResultadosComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
