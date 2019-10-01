import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasPageComponent } from './pessoas-page.component';

describe('PessoasPageComponent', () => {
  let component: PessoasPageComponent;
  let fixture: ComponentFixture<PessoasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
