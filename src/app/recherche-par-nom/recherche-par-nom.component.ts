import { Component } from '@angular/core';
import { Boisson } from '../model/boisson.model';
import { AuthService } from '../auth.service';
import { BoissonService } from '../boisson.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent {
boissons!: Boisson[];
nomBoisson! :string ;
allBoissons! :Boisson[];
searchTerm!: string;
constructor(private boissonService: BoissonService, 
  public authService: AuthService){}
 
  
  ngOnInit(): void {
  this.boissonService.listeBoisson().subscribe(b => {
  console.log(b);
  this.boissons = b;
  });
  }
  onKeyUp(filterText : string){
  this.boissons = this.allBoissons.filter(item =>
  item.nomBoisson!.toLowerCase().includes(filterText));
  }



rechercherbois(){
  this.boissonService.rechercherParNom(this.nomBoisson).subscribe(b =>
     {this.boissons = b;
    console.log(b)});
  }
  

}
