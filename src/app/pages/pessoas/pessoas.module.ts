import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasRoutingModule } from './pessoas-routing.module';
import { PessoasPageComponent } from './pessoas-page/pessoas-page.component';
import { PessoasApiModule } from '../../api/pessoas-api/pessoas-api.module';


@NgModule({
  declarations: [PessoasPageComponent],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    PessoasApiModule
  ]
})
export class PessoasModule { }
