import { Component, OnInit } from '@angular/core';
import { Produto, colsTable, lista2 } from 'src/produtos';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})

export class FirstPageComponent implements OnInit {
  produtos = lista2;
  colsTable = colsTable;

  constructor() { }

  ngOnInit(): void {
  }

  clickTr(p:Produto){
    console.log(p);
  }
}
