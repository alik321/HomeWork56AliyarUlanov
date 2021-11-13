import { Component} from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})

export class IngredientsComponent{
  price = 0;

  ingredients = [
    {name: 'meat', count: 0, price: 50},
    {name: 'cheese', count: 0, price: 20},
    {name: 'salad', count: 0, price: 5},
    {name: 'bacon', count: 0, price: 30},
  ]
  addIngredient(e: Event ){
    const target = <HTMLButtonElement> e.target;
    this.ingredients.forEach(ing=>{
      if(ing.name === target.name){
        ing.count++;
        this.price += ing.price;
      }
    })
  }
  deleteIngredient(e: Event){
    const target = <HTMLButtonElement> e.target;
    this.ingredients.forEach(ing=>{
      if(ing.name === target.name){
        ing.count--;
        this.price -= ing.price;
      }
    })
  }
}
