import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginApiFormComponent } from './login-api-form.component';

describe('LoginApiFormComponent', () => {
  let component: LoginApiFormComponent;
  let fixture: ComponentFixture<LoginApiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginApiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginApiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
