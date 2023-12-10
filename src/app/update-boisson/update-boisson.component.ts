

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Boisson } from '../model/boisson.model';
import { BoissonService } from '../boisson.service';
import { Type } from '../model/type.model';
@Component({
  selector: 'app-update-boisson',
  templateUrl: './update-boisson.component.html',
  styleUrls: ['./update-boisson.component.css']
})
export class UpdateBoissonComponent implements OnInit {
  currentBoisson = new Boisson();
  types! : Type[];
  updatedtyid! : number;
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
  private boissonService: BoissonService) { }
  ngOnInit(): void {
   
    this.boissonService.listetypes().
    subscribe(t => {this.types = t._embedded.types;
    console.log(t);
    });
    this.boissonService.consulterBoisson(this.activatedRoute.snapshot.params['id']).
    subscribe( b =>{ this.currentBoisson = b;
    this.updatedtyid =this.currentBoisson.type!.idType;
    } ) ;
  } 
  
  updateBoisson() {
    this.currentBoisson.type = this.types.
 find(t => t.idType == this.updatedtyid)!;
this.boissonService.updateBoisson(this.currentBoisson).subscribe(b => {
this.router.navigate(['boissons']); }
);
    }
}
 