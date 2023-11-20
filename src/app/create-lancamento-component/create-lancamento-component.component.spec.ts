import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLancamentoComponentComponent } from './create-lancamento-component.component';

describe('CreateLancamentoComponentComponent', () => {
  let component: CreateLancamentoComponentComponent;
  let fixture: ComponentFixture<CreateLancamentoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLancamentoComponentComponent]
    });
    fixture = TestBed.createComponent(CreateLancamentoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
