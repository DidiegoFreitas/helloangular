import { Component, OnInit } from '@angular/core';
import { produtos, produtosInfo } from 'src/produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos = produtos;
  produtosInfo = produtosInfo;
  constructor() { }

  compartilhar() {
    window.alert('mostrando pra vc');
  }

  onNotify(nome:string) {
    window.alert('Você será avisado por email quando tiver uma promoção #soqnao ' + nome);
  }

  ngOnInit(): void {
  }

}
