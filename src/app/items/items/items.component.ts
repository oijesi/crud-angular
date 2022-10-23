import { ItemsService } from './../services/items.service';
import { Item } from './../model/item';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: Observable<Item[]>;
  displayedColumns = ['name', 'category'];

  //itemsService: ItemsService;

  constructor(private itemsService: ItemsService) {
    //this.items = [];
    //this.itemsService = new ItemsService();
    this.items = this.itemsService.list();
  }

  ngOnInit(): void {
  }

}
