import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto, produtos } from 'src/produtos';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produto: Produto | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idProdutoFromRoute = Number(routeParams.get('idProduto'));

    // Faz a busca do produto dentro de produtos
    // No mundo real não fariamos aqui...
    this.produto = produtos.find( product => product.id===idProdutoFromRoute );

  }

}
