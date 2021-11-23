import { Component, OnInit } from '@angular/core';
import { Produto, colsTable, lista1 } from 'src/produtos';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})

export class SecondPageComponent implements OnInit {
  produtos = lista1;
  colsTable = colsTable;

  constructor() { }

  ngOnInit(): void {
  }

}
