import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchArtistAlbumsComponent } from '../search-artist-albums/search-artist-albums.component';

import { AlbumItemComponent } from './album-item.component';

describe('AlbumItemComponent', () => {
  let component: AlbumItemComponent;
  let fixture: ComponentFixture<AlbumItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumItemComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
