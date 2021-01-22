import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyResultComponent } from './empty-result.component';

describe('EmptyResultComponent', () => {
  let component: EmptyResultComponent;
  let fixture: ComponentFixture<EmptyResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an advice of no found artist', () => {
    let adviceShown : string = component.advice;
    expect(adviceShown).toEqual("The artist whom you are looking for was not found");
  });
});
