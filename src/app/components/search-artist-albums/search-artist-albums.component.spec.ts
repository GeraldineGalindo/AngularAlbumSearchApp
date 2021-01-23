import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


import { SearchArtistAlbumsComponent } from './search-artist-albums.component';

describe('SearchArtistAlbumsComponent', () => {
  let component: SearchArtistAlbumsComponent;
  let fixture: ComponentFixture<SearchArtistAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ SearchArtistAlbumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchArtistAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the artist name when input is filled', () =>{
    component.artist = 'Gorillaz';
    fixture.detectChanges();
    fixture.whenStable().then(() =>{
      let input = fixture.debugElement.query(By.css('input'));
      let element = input.nativeElement;
      expect(element.value).toBe('Gorillaz');
    }); 
  });

});
