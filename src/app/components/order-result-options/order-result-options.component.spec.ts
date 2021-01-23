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

  it('should emit Ascendant when click Order A-Z option', () =>{
    const comp = fixture.componentInstance;
    spyOn(component.orderResults, 'emit');

    const radioButton = fixture.nativeElement.querySelector('div.asc > input');
    radioButton.dispatchEvent(new Event('click'));

    fixture.detectChanges();
    expect(component.orderResults.emit).toHaveBeenCalledWith('Ascendant');
  })

  it('should emit Descendant when click Order Z-A option', () =>{
    const comp = fixture.componentInstance;
    spyOn(component.orderResults, 'emit');

    const radioButton = fixture.nativeElement.querySelector('div.des > input');
    radioButton.dispatchEvent(new Event('click'));

    fixture.detectChanges();
    expect(component.orderResults.emit).toHaveBeenCalledWith('Descendant');
  });
});
