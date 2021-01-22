import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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

  it('should be created', () =>{
    expect(component).toBeTruthy();
  });

  it('should create an advice of no found artist', () => {
    let adviceShown : string = component.advice;
    expect(adviceShown).toBe("The artist who you are looking for was not found");
  });

  it('should have an H1 tag with a warning of empty result', () =>{
    expect(fixture.debugElement.query((By.css('span'))).nativeElement.innerText).toBe("The artist who you are looking for was not found")
  });


});
