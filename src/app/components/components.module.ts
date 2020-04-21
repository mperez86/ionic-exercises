import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ExpandableContentComponent } from './expandable-content/expandable-content.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [
    ExpandableContentComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ], 
  exports: [
    ExpandableContentComponent,
    RatingComponent
  ]
})
export class ComponentsModule { }
