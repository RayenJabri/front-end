import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoissonsComponent } from './boissons/boissons.component';
import { AddBoissonComponent } from './add-boisson/add-boisson.component';
import { FormsModule } from '@angular/forms';
import { UpdateBoissonComponent } from './update-boisson/update-boisson.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { UpdateTypeComponent } from './update-type/update-type.component';


@NgModule({
  declarations: [
    AppComponent,
    BoissonsComponent,
    AddBoissonComponent,
    UpdateBoissonComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParTypeComponent,
    SearchFilterPipe,
    RechercheParNomComponent,
    ListeTypesComponent,
    UpdateTypeComponent,
    
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
