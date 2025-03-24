
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CargarArchivoComponent } from './cargar-archivo/cargar-archivo.component';
import { VisualizacionComponent } from './visualizacion/visualizacion.component';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent}, 
  {path:'cargar-archivo', component: CargarArchivoComponent},
  {path:'visualizacion', component: VisualizacionComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
