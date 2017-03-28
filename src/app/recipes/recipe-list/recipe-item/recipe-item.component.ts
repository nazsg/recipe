import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
   // to bind this from outside (recipe-list.component.html)
   @Input() recipe: Recipe;

   // to make this listenable from outside
   @Output() recipeSelected = new EventEmitter<void>();

   constructor() { }

   ngOnInit() {
   }

   onSelected() {
      this.recipeSelected.emit();
   }
}
