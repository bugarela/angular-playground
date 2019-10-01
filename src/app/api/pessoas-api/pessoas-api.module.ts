import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoasApiTableComponent } from './components/pessoas-api-table/pessoas-api-table.component';
import { MatTableModule, MatListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [PessoasApiTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatListModule,
    HttpClientModule
  ],
  exports: [PessoasApiTableComponent]
})
export class PessoasApiModule { }
