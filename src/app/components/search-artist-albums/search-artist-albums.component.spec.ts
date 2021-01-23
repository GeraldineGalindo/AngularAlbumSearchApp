import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';


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

});
