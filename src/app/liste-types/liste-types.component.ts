import { boissonGuard } from './../boisson.guard';
import { BoissonService } from '../boisson.service';
import { Type } from './../model/type.model';
import { Component, OnInit } from '@angular/core';
import { Boisson } from '../model/boisson.model';

@Component({
  selector: 'app-liste-types',
  templateUrl: './liste-types.component.html',
  styleUrls: ['./liste-types.component.css']
})
export class ListeTypesComponent  implements OnInit {
  ajout:boolean=true;
    types! : Type[];
    updatedType:Type = {"idType":0,"nomType":""};
boisson: any;
    constructor(private boissonService : BoissonService) { }
    ngOnInit(): void {
    this.boissonService.listetypes().
    subscribe(b => {this.types = b._embedded.types;
    console.log(b);
    });
    }
    typeUpdated (t:Type){
      console.log("t updated event",t);
      this.boissonService.ajouterType(t).
       subscribe( ()=> this.chargerTypes());
      }
       
      chargerTypes(){
        this.boissonService.listetypes().
        subscribe(t => {this.types = t._embedded.types;
        console.log(t);
        });
        }
        updateType(t:Type) {
          this.updatedType=t;
          this.ajout=false;
          }


          
  }

