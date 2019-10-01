import { TestBed } from '@angular/core/testing';

import { LoginApiServiceService } from './login-api-service.service';

describe('LoginApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginApiServiceService = TestBed.get(LoginApiServiceService);
    expect(service).toBeTruthy();
  });
});
