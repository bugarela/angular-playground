import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasPageComponent } from './pessoas-page/pessoas-page.component';


const routes: Routes = [
  {
    path: ':idPessoa',
    component: PessoasPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
