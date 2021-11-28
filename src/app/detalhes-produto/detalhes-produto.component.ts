import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto, lista2 } from 'src/produtos';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: Produto | undefined;

  constructor(private route: ActivatedRoute, private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idProdutoFromRoute = Number(routeParams.get('idProduto'));

    // Faz a busca do produto dentro de produtos
    // No mundo real não fariamos aqui...
    this.produto = lista2.find( product => product.id===idProdutoFromRoute );
  }
  inserirNoCarrinho(produto:Produto){
    this.carrinhoService.inserirNoCarrinho(produto);
    window.alert('Produto inserido com sucesso!!');
  }
}
