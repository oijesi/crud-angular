import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Item } from './../model/item';
import { ItemsService } from './../services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items$: Observable<Item[]>;
  displayedColumns = ['name', 'category'];

  //itemsService: ItemsService;

  constructor(
    private itemsService: ItemsService,
    public dialog: MatDialog
    ) {
    //this.items = [];
    //this.itemsService = new ItemsService();
    this.items$ = this.itemsService.list()
    .pipe(
      catchError(error => {
        this.onError(error)
        return of([])
      })
    );
  }

  onError(error: object) {
    this.dialog.open(ErrorDialogComponent, {
      data: error,
    });
  }

  ngOnInit(): void {
  }

}
