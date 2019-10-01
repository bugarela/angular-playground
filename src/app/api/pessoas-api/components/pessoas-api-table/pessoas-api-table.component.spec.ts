import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasApiTableComponent } from './pessoas-api-table.component';

describe('PessoasApiTableComponent', () => {
  let component: PessoasApiTableComponent;
  let fixture: ComponentFixture<PessoasApiTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoasApiTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoasApiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
