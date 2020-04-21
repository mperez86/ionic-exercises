import { Component, OnInit } from '@angular/core';
import { FruitsService } from 'src/app/services/fruits.service';
import { Fruit } from 'src/app/models/fruit.model';


@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.page.html',
  styleUrls: ['./fruit-list.page.scss'],
})
export class FruitListPage implements OnInit {

  public fruits: Fruit[];

  constructor(private fruitsService: FruitsService) { }

  ngOnInit() {
    this.fruitsService.getFruits().subscribe((fruits: Fruit[]) => {
      this.fruits = fruits
    });
  }

}
