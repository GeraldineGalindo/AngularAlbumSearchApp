import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchArtistAlbumsComponent } from './search-artist-albums.component';

describe('SearchArtistAlbumsComponent', () => {
  let component: SearchArtistAlbumsComponent;
  let fixture: ComponentFixture<SearchArtistAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
