import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginApiService } from '../../services/login-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-api-form',
  templateUrl: './login-api-form.component.html',
  styleUrls: ['./login-api-form.component.scss']
})
export class LoginApiFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    protected $formBuilder: FormBuilder,
    protected $loginApiService: LoginApiService,
    protected $router: Router
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.$formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  login(): void {
    const formValues = this.loginForm.getRawValue();
    const user = this.$loginApiService.login(formValues.username, formValues.password);
    if (user) {
      this.$router.navigate(['pessoas', '1']);
    } else {
      console.log('Usuário ou senha incorretos!');
    }
  }

}
