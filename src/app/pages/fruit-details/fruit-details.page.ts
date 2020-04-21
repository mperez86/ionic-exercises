import { Component, OnInit } from '@angular/core';
import { FruitsService } from 'src/app/services/fruits.service';
import { ActivatedRoute } from '@angular/router';
import { Fruit } from 'src/app/models/fruit.model';

@Component({
  selector: 'app-fruit-details',
  templateUrl: './fruit-details.page.html',
  styleUrls: ['./fruit-details.page.scss'],
})
export class FruitDetailsPage implements OnInit {

  public fruit: Fruit = {} as Fruit;
  
  constructor(
    private fruitsService: FruitsService,
    private activatedRoute: ActivatedRoute, 
  ) { }

  ngOnInit() {

    this.fruitsService.getFruit(
      +this.activatedRoute.snapshot.paramMap.get('fruit-id')).subscribe((fruit: Fruit) => {
        this.fruit = fruit
      }
    );
  }

}
