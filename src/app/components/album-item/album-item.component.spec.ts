import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumInfo } from 'src/app/models/AlbumInfo';
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

  
  it('should initialize in empty when undefined or empty input', ()=>{
    var albumMock: any = null;
    component.album = albumMock;
    component.setUpAlbumData();
    expect(component.albumName).toBe("");
    expect(component.albumPrice).toBe(0);
    expect(component.artistName).toBe("");
    expect(component.currency).toBe("");
  });

  it('should initialize with real values when input is valid', () =>{
    var albumMock: AlbumInfo = new AlbumInfo();
    albumMock.artistName = "Woodkid";
    albumMock.currency = "USD";
    albumMock.collectionPrice = 15.99;
    albumMock.collectionName = "The Golden Age";
    

    component.album = albumMock;
    component.setUpAlbumData();
    expect(component.artistName).toBe("Woodkid");
    expect(component.currency).toBe("USD");
    expect(component.albumName).toBe("The Golden Age");
    expect(component.albumPrice).toBe(15.99);

  });

  it('should return false if the album has no cover image', () =>{
    var albumMock: any = null;
    component.album = albumMock;
    expect(component.hasNotAlbumCover()).toBeTruthy();
    expect(component.hasCover()).toBeFalsy();
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('img').src).toContain("https://cdn.vox-cdn.com/thumbor/Wkn_G9T1WDLJCtOkThcezJha_hA=/0x0:1200x800/920x613/filters:focal(504x304:696x496):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63387814/Screen_Shot_2019_04_10_at_11.45.32_AM.0.png");
  });

  it('should return false if the album cover image link has come as an empty string', ()=>{
    var albumMock: AlbumInfo = new AlbumInfo();
    albumMock.artworkUrl100 = "";
    component.album = albumMock;
    expect(component.hasNotAlbumCover()).toBeTruthy();
    expect(component.hasCover()).toBeFalsy();
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('img').src).toContain("https://cdn.vox-cdn.com/thumbor/Wkn_G9T1WDLJCtOkThcezJha_hA=/0x0:1200x800/920x613/filters:focal(504x304:696x496):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63387814/Screen_Shot_2019_04_10_at_11.45.32_AM.0.png");
  })

  it('should charge the cover image if found', () =>{
    var albumMock: AlbumInfo = new AlbumInfo();
    albumMock.artworkUrl100="https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/f3/87/b2/f387b2a4-c890-34eb-ad05-21419091c816/source/100x100bb.jpg";
    component.album = albumMock;
    expect(component.hasNotAlbumCover()).toBeFalsy();
    expect(component.hasCover()).toBeTruthy();
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('img').src).toContain("https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/f3/87/b2/f387b2a4-c890-34eb-ad05-21419091c816/source/100x100bb.jpg");
  });

});
