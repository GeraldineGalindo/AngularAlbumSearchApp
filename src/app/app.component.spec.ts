import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SearchArtistAlbumsComponent } from './components/search-artist-albums/search-artist-albums.component';
import { ArtistService } from './services/artist.service';

describe('AppComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ArtistService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [ArtistService],
      declarations: [
        AppComponent,
        HeaderComponent,
        AlbumsComponent,
        SearchArtistAlbumsComponent 
      ],
    }).compileComponents();
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ArtistService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-album-search-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-album-search-app');
  });
});
