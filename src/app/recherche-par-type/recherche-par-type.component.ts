import { Type } from './../model/type.model';
import { Component } from '@angular/core';
import { Boisson } from '../model/boisson.model';
import { BoissonService } from '../boisson.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-recherche-par-type',
  templateUrl: './recherche-par-type.component.html',
  styleUrls: ['./recherche-par-type.component.css']
})
export class RechercheParTypeComponent {
  boissons! : Boisson[];
  IdType! : number;
  types! : Type[];
  searchTerm: any;
  constructor(private boissonService: BoissonService, 
    public authService: AuthService){}

  ngOnInit(): void {
    this.boissonService.listetypes().subscribe (t => {this.types = t._embedded.types;
    console.log(t);
    });
    }
    

onchange(){
  this.boissonService.rechercherParType(this.IdType).
  subscribe(b =>{this.boissons=b});
}   
}
