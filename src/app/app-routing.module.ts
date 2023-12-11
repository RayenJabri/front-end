
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoissonsComponent } from './boissons/boissons.component';
import { AddBoissonComponent } from './add-boisson/add-boisson.component';
import { UpdateBoissonComponent } from './update-boisson/update-boisson.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { BoissonService } from './boisson.service';
import { boissonGuard } from './boisson.guard';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';

const routes: Routes = [
  {path: "boissons",component : BoissonsComponent},
  {path: "add-boisson",component : AddBoissonComponent, canActivate:[boissonGuard]},
  {path: "", redirectTo: "boissons", pathMatch: "full" },
  {path: "updateBoisson/:id", component: UpdateBoissonComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "rechercheParType", component : RechercheParTypeComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeTypes", component : ListeTypesComponent},
  {path:'register',component:RegisterComponent},
  {path: 'verifEmail', component: VerifEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
