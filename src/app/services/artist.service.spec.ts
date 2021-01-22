import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ArtistService } from './artist.service';
import { HttpClient } from '@angular/common/http';

describe('ArtistService', () => {
  let service: ArtistService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArtistService]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ArtistService);

  });

  it('should get a number of records when do a query', () => {
    var result: number = 0;
    var queryResult = service.getArtistAlbums("Coldplay").subscribe(data =>{
      result = data.resultCount;
    });
    console.log(queryResult);
    expect(result).toEqual(50);
  });
});
