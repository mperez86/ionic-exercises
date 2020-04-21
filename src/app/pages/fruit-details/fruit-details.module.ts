import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FruitDetailsPageRoutingModule } from './fruit-details-routing.module';

import { FruitDetailsPage } from './fruit-details.page';
import { FruitsService } from 'src/app/services/fruits.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FruitDetailsPageRoutingModule
  ],
  declarations: [FruitDetailsPage],
  providers: [FruitsService]
})
export class FruitDetailsPageModule {}
