import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderResultOptionsComponent } from './order-result-options.component';

describe('OrderResultOptionsComponent', () => {
  let component: OrderResultOptionsComponent;
  let fixture: ComponentFixture<OrderResultOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderResultOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderResultOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
