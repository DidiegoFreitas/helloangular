import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  {path:'', component: ProdutosComponent},
  // {path:'**', component: ProdutosComponent},
  {path:'produtos/:idProduto', component: DetalhesProdutoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
