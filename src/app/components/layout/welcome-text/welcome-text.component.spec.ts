import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { WelcomeTextComponent } from './welcome-text.component';

describe('WelcomeTextComponent', () => {
  let component: WelcomeTextComponent;
  let fixture: ComponentFixture<WelcomeTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () =>{
    expect(component).toBeTruthy();
  });

  it('should be seen a welcome message to begin with the search', () => {
    let welcomeMessage : string = component.welcomeMessage;
    expect(welcomeMessage).toEqual("Welcome, to begin write the name of an artist");
  });

  it('should have an H1 tag with a welcome message', () =>{
    expect(fixture.debugElement.query((By.css('span'))).nativeElement.innerText).toBe("Welcome, to begin write the name of an artist")
  });

});
