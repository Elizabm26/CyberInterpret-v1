import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {AngularFireModule} from '@angular/fire';
//import {AngularFireStorageModule} from '@angular/fire/storage';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CargarArchivoComponent } from './cargar-archivo/cargar-archivo.component';
import { VisualizacionComponent } from './visualizacion/visualizacion.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,  
    DashboardComponent,
    CargarArchivoComponent,
    VisualizacionComponent
  ],    
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
