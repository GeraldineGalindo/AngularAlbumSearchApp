import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () =>{
    expect(component).toBeTruthy();
  });

  it('should be seen the title of the application', () => {
    let title: string = component.title;
    expect(title).toBe("ITunes Artist Album Searcher");
  });

  it('should have an H1 tag with the title of the app', () =>{
    expect(fixture.debugElement.query((By.css('h1'))).nativeElement.innerText).toBe("ITunes Artist Album Searcher")
  });
});
