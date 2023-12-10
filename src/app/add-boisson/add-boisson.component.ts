import { Boisson } from './../model/boisson.model';
import { Component, OnInit } from '@angular/core';

import { BoissonService } from '../boisson.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Type } from '../model/type.model';
@Component({
  selector: 'app-add-boisson',
  templateUrl: './add-boisson.component.html',
  styleUrls: ['./add-boisson.component.css']
})
export class AddBoissonComponent implements OnInit{

  types! :Type[];
  newIdtype! : number;
  newType! : Type;
  
  newBoisson = new Boisson();
  constructor(private boissonService: BoissonService,
    private router :Router,
    private activatedRoute: ActivatedRoute,) { }
  ngOnInit(): void {
    this.boissonService.listetypes().
subscribe(t => {this.types = t._embedded.types;
console.log(t);});


  }
  addBoisson(){
    this.boissonService.ajouterBoisson(this.newBoisson)
    .subscribe(b => {
    console.log(b);
    this.router.navigate(['boissons']);
    });
    }
    
}
