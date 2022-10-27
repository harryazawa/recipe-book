import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a Test Recipe',
      'https://www.foodandwine.com/thmb/x3xYEfsVqTTDHkXsk2eQGdsatPk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-swiss-cheese-fondue-FT-RECIPE0422-35e22a24bcb24899840568271197377b.jpg'),
    new Recipe('A Test Recipe', 'This is a Test Recipe',
      'https://www.foodandwine.com/thmb/x3xYEfsVqTTDHkXsk2eQGdsatPk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-swiss-cheese-fondue-FT-RECIPE0422-35e22a24bcb24899840568271197377b.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
