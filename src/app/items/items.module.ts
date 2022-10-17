import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    AppMaterialModule
  ]
})
export class ItemsModule { }
