import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ArtistService } from '../../services/artist.service';
import { HttpClient } from '@angular/common/http';
import { AlbumsComponent } from './albums.component';
import { SearchArtistAlbumsComponent } from '../search-artist-albums/search-artist-albums.component';
import { WelcomeTextComponent } from '../layout/welcome-text/welcome-text.component';
import { OrderResultOptionsComponent } from '../order-result-options/order-result-options.component';
import { FormsModule } from '@angular/forms';
import { AlbumInfo } from 'src/app/models/AlbumInfo';
import { ExpectedConditions } from 'protractor';

describe('AlbumsComponent', () => {
  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;
  let service: ArtistService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: 
      [ 
        AlbumsComponent,
        SearchArtistAlbumsComponent,
        WelcomeTextComponent,
        OrderResultOptionsComponent
      ],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [ArtistService]
    })
    .compileComponents();
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ArtistService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter results by artist', () =>{
    var albumsMock: AlbumInfo[] = [];
    var album1 = new AlbumInfo();
    album1.artistName = "Ylvis";
    album1.collectionName = "What does the fox say";
    
    var album2 = new AlbumInfo();
    album2.artistName = "DOES";
    album2.collectionName = "The world's edge";

    var album3 = new AlbumInfo();
    album3.artistName = "ABBA";
    album3.collectionName = "Does your mama";

    albumsMock.push(album1);
    albumsMock.push(album2);
    albumsMock.push(album3);

    component.albums = albumsMock;
    component.filterResultsByArtist("DOES");

    expect(component.albums.length).toBe(1);
    expect(component.albums[0].artistName).toBe("DOES");
    expect(component.albums[0].collectionName).toBe("The world's edge");

  });

  it('should have only one page when See all albums is picked', ()=>{
    component.seeAllResults();
    expect(component.actualPage).toBe(1);
    expect(component.areAllShown).toBeTruthy();
  });

  it('should have eight elements per page when Reset Pagination', () =>{
    component.resetPagination();
    expect(component.elementsPerPage).toBe(8);
    expect(component.areAllShown).toBeFalsy();
  });

  it('should control increase of page elements when one', () =>{
    component.elementsPerPage = 1;
    component.increasePerPage();
    expect(component.elementsPerPage).toBe(2);
  });

  it('should control increase of page elements when elements are near', () =>{
    var albumsMock: AlbumInfo[] = [];
    var album1 = new AlbumInfo();
    album1.artistName = "Imagine Dragons";
    album1.collectionName = "Evolve";
    
    var album2 = new AlbumInfo();
    album2.artistName = "Imagine Dragons";
    album2.collectionName = "Smoke + Mirrors";

    var album3 = new AlbumInfo();
    album3.artistName = "Imagine Dragons";
    album3.collectionName = "Night Visions";

    var album4 = new AlbumInfo();
    album4.artistName = "Imagine Dragons";
    album4.collectionName = "Origins";


    albumsMock.push(album1);
    albumsMock.push(album2);
    albumsMock.push(album3);
    albumsMock.push(album4);

    component.albums = albumsMock;
    component.elementsPerPage = 2;
    component.increasePerPage();
    expect(component.elementsPerPage).toBe(4);
  });

  it('should be static when increase per page has reached its maximum', () =>{
    var albumsMock: AlbumInfo[] = [];
    var album1 = new AlbumInfo();
    album1.artistName = "Imagine Dragons";
    album1.collectionName = "Evolve";
    
    var album2 = new AlbumInfo();
    album2.artistName = "Imagine Dragons";
    album2.collectionName = "Smoke + Mirrors";

    var album3 = new AlbumInfo();
    album3.artistName = "Imagine Dragons";
    album3.collectionName = "Night Visions";

    var album4 = new AlbumInfo();
    album4.artistName = "Imagine Dragons";
    album4.collectionName = "Origins";


    albumsMock.push(album1);
    albumsMock.push(album2);
    albumsMock.push(album3);
    albumsMock.push(album4);

    component.albums = albumsMock;
    component.elementsPerPage = 4;
    component.increasePerPage();
    expect(component.elementsPerPage).toBe(4);
  });

  it('should control not counting odd numbers on decreasing elements per page', ()=> {
    var albumsMock: AlbumInfo[] = [];
    var album1 = new AlbumInfo();
    album1.artistName = "Imagine Dragons";
    album1.collectionName = "Evolve";
    
    var album2 = new AlbumInfo();
    album2.artistName = "Imagine Dragons";
    album2.collectionName = "Smoke + Mirrors";

    var album3 = new AlbumInfo();
    album3.artistName = "Imagine Dragons";
    album3.collectionName = "Night Visions";

    var album4 = new AlbumInfo();
    album4.artistName = "Imagine Dragons";
    album4.collectionName = "Origins";

    var album5 = new AlbumInfo();
    album5.artistName = "Imagine Dragons";
    album5.collectionName = "Bad Liar";

    albumsMock.push(album1);
    albumsMock.push(album2);
    albumsMock.push(album3);
    albumsMock.push(album4);
    albumsMock.push(album5);

    component.albums = albumsMock;
    component.elementsPerPage = 5;
    component.decreasePerPage();
    expect(component.elementsPerPage).toBe(2);
  });

  it('should not allow less than 2 elements', () =>{
    component.elementsPerPage = 2;
    component.decreasePerPage();
    expect(component.elementsPerPage).toBe(2);
  });

  it('should order in ascendant order when needed',() =>{
    var albumsMock: AlbumInfo[] = [];
    var album1 = new AlbumInfo();
    album1.artistName = "Imagine Dragons";
    album1.collectionName = "Evolve";
    
    var album2 = new AlbumInfo();
    album2.artistName = "Imagine Dragons";
    album2.collectionName = "Smoke + Mirrors";

    var album3 = new AlbumInfo();
    album3.artistName = "Imagine Dragons";
    album3.collectionName = "Night Visions";

    var album4 = new AlbumInfo();
    album4.artistName = "Imagine Dragons";
    album4.collectionName = "Origins";


    albumsMock.push(album2);
    albumsMock.push(album3);
    albumsMock.push(album4);
    albumsMock.push(album1);

    component.albums = albumsMock;
    component.orderByCriteria("Ascendant");
    expect(component.albums).toBe(albumsMock.reverse());
  });

  it('should order in descendant order when needed', () =>{
    var albumsMock: AlbumInfo[] = [];
    var album1 = new AlbumInfo();
    album1.artistName = "Imagine Dragons";
    album1.collectionName = "Evolve";
    
    var album2 = new AlbumInfo();
    album2.artistName = "Imagine Dragons";
    album2.collectionName = "Smoke + Mirrors";

    var album3 = new AlbumInfo();
    album3.artistName = "Imagine Dragons";
    album3.collectionName = "Night Visions";

    var album4 = new AlbumInfo();
    album4.artistName = "Imagine Dragons";
    album4.collectionName = "Origins";


    albumsMock.push(album1);
    albumsMock.push(album4);
    albumsMock.push(album3);
    albumsMock.push(album2);

    component.albums = albumsMock;
    component.orderByCriteria("Descendant");
    expect(component.albums).toBe(albumsMock.reverse());
  });


});
