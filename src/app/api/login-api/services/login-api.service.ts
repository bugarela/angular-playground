import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor() { }

  login(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      return { email: 'admin@admin.com', nome: 'Admin da Silva' };
    }
    return null;
  }
}
