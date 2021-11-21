import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from 'src/produtos';

@Component({
  selector: 'app-comp-info-produto',
  templateUrl: './comp-info-produto.component.html',
  styleUrls: ['./comp-info-produto.component.css']
})
export class CompInfoProdutoComponent implements OnInit {
  @Input() produto!: Produto;

  constructor() { }

  ngOnInit(): void {
  }

}
