import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginApiFormComponent } from './components/login-api-form/login-api-form.component';
import { MatCardModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginApiFormComponent],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [LoginApiFormComponent]
})
export class LoginApiModule { }
