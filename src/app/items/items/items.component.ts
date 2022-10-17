import { Item } from './../model/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [
    { _id: '1', name: 'Angular', category: 'Front-End' },
    { _id: '2', name: 'Spring', category: 'Back-End' }
  ];
  displayedColumns = ['name', 'category'];

  constructor() {
    //this.items = [];
  }

  ngOnInit(): void {
  }

}
