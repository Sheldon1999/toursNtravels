import { Component, OnInit } from '@angular/core';
import { Window } from 'selenium-webdriver';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  opencontent = false;
  constructor() { }
  opnenContent(){
  this.opencontent = true;
  }

  ngOnInit() {
  }

}
