import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ArtistService } from '../../services/artist.service';
import { HttpClient } from '@angular/common/http';
import { AlbumsComponent } from './albums.component';
import { SearchArtistAlbumsComponent } from '../search-artist-albums/search-artist-albums.component';
import { WelcomeTextComponent } from '../layout/welcome-text/welcome-text.component';
import { OrderResultOptionsComponent } from '../order-result-options/order-result-options.component';
import { FormsModule } from '@angular/forms';

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

});
