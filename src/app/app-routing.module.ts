import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { EnvioComponent } from './envio/envio.component';

const routes: Routes = [
  { path:'', component: FirstPageComponent },
  { path:'secondPage', component: SecondPageComponent },
  { path:'detalhes/:idProduto', component: DetalhesProdutoComponent },
  { path:'carrinho', component: CarrinhoComponent },
  { path:'envio', component: EnvioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
