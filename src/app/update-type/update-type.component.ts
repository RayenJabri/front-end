import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Type } from '../model/type.model';

@Component({
  selector: 'app-update-type',
  templateUrl: './update-type.component.html',
  styleUrls: ['./update-type.component.css']
})
export class UpdateTypeComponent {
  @Input()
ajout!:boolean;
  @Output()
typeUpdated = new EventEmitter<Type>();
saveCategorie() {
  this.typeUpdated.emit(this.type);
}
  @Input()
  type! : Type;
  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateType",this.type);
    }
    
}
