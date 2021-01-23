import { ComponentFixture, TestBed } from '@angular/core/testing';
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
    })
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ArtistService);

  });

  it('should get a number of records when do a query', () => {
    var result: number = 0;
    var queryResult = service.getArtistAlbums("Bukahara").subscribe((data) =>{
      console.log(data);
      expect(data.resultCount).toBe(7);
    });
    const req = httpTestingController.expectOne("https://itunes.apple.com/search?term=Bukahara&entity=album");
    req.flush({
      "resultCount":7,
      "results": [
     {"wrapperType":"collection", "collectionType":"Album", "artistId":1069900066, "collectionId":1497155508, "amgArtistId":3313601, "artistName":"Bukahara", "collectionName":"Canaries in a Coal Mine", "collectionCensoredName":"Canaries in a Coal Mine", "artistViewUrl":"https://music.apple.com/us/artist/bukahara/1069900066?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/canaries-in-a-coal-mine/1497155508?uo=4", "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/7a/dd/82/7add825b-b616-e8d7-484e-407494861637/source/60x60bb.jpg", "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/7a/dd/82/7add825b-b616-e8d7-484e-407494861637/source/100x100bb.jpg", "collectionPrice":12.99, "collectionExplicitness":"notExplicit", "trackCount":11, "copyright":"℗ 2020 BML records", "country":"USA", "currency":"USD", "releaseDate":"2020-03-13T07:00:00Z", "primaryGenreName":"Pop"}, 
     {"wrapperType":"collection", "collectionType":"Album", "artistId":1069900066, "collectionId":1285850728, "amgArtistId":3313601, "artistName":"Bukahara", "collectionName":"Phantasma", "collectionCensoredName":"Phantasma", "artistViewUrl":"https://music.apple.com/us/artist/bukahara/1069900066?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/phantasma/1285850728?uo=4", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/7f/cd/ee/7fcdee75-0d04-1572-6855-1db7122fa3c8/source/60x60bb.jpg", "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/7f/cd/ee/7fcdee75-0d04-1572-6855-1db7122fa3c8/source/100x100bb.jpg", "collectionPrice":9.99, "collectionExplicitness":"notExplicit", "trackCount":11, "copyright":"℗ 2017 BML records", "country":"USA", "currency":"USD", "releaseDate":"2017-05-10T07:00:00Z", "primaryGenreName":"Pop"}, 
     {"wrapperType":"collection", "collectionType":"Album", "artistId":1069900066, "collectionId":1369779879, "amgArtistId":3313601, "artistName":"Bukahara", "collectionName":"Strange Delight", "collectionCensoredName":"Strange Delight", "artistViewUrl":"https://music.apple.com/us/artist/bukahara/1069900066?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/strange-delight/1369779879?uo=4", "artworkUrl60":"https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/45/9c/37/459c3756-4c8c-134e-a17e-b500a715178f/source/60x60bb.jpg", "artworkUrl100":"https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/45/9c/37/459c3756-4c8c-134e-a17e-b500a715178f/source/100x100bb.jpg", "collectionPrice":10.99, "collectionExplicitness":"notExplicit", "trackCount":11, "copyright":"℗ 2018 BML records", "country":"USA", "currency":"USD", "releaseDate":"2015-04-01T07:00:00Z", "primaryGenreName":"Worldwide"}, 
     {"wrapperType":"collection", "collectionType":"Album", "artistId":1069900066, "collectionId":1369768038, "amgArtistId":3313601, "artistName":"Bukahara", "collectionName":"Bukahara Trio", "collectionCensoredName":"Bukahara Trio", "artistViewUrl":"https://music.apple.com/us/artist/bukahara/1069900066?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/bukahara-trio/1369768038?uo=4", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/98/5d/52/985d52ff-8804-7ddb-8b1c-cbf87dc02067/source/60x60bb.jpg", "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/98/5d/52/985d52ff-8804-7ddb-8b1c-cbf87dc02067/source/100x100bb.jpg", "collectionPrice":8.99, "collectionExplicitness":"notExplicit", "trackCount":11, "copyright":"℗ 2018 BML records", "country":"USA", "currency":"USD", "releaseDate":"2013-04-01T07:00:00Z", "primaryGenreName":"Worldwide"}, 
     {"wrapperType":"collection", "collectionType":"Album", "artistId":1069900066, "collectionId":1457461805, "amgArtistId":3313601, "artistName":"Bukahara", "collectionName":"Live Session", "collectionCensoredName":"Live Session", "artistViewUrl":"https://music.apple.com/us/artist/bukahara/1069900066?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/live-session/1457461805?uo=4", "artworkUrl60":"https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/45/59/92/45599241-a4df-a4bb-cd7a-e1043551a6ad/source/60x60bb.jpg", "artworkUrl100":"https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/45/59/92/45599241-a4df-a4bb-cd7a-e1043551a6ad/source/100x100bb.jpg", "collectionPrice":12.99, "collectionExplicitness":"notExplicit", "trackCount":13, "copyright":"℗ 2019 BML records", "country":"USA", "currency":"USD", "releaseDate":"2019-04-01T07:00:00Z", "primaryGenreName":"Worldwide"}, 
     {"wrapperType":"collection", "collectionType":"Album", "artistId":1069900066, "collectionId":1069900065, "amgArtistId":3313601, "artistName":"Bukahara", "collectionName":"New Home - Single", "collectionCensoredName":"New Home - Single", "artistViewUrl":"https://music.apple.com/us/artist/bukahara/1069900066?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/new-home-single/1069900065?uo=4", "artworkUrl60":"https://is2-ssl.mzstatic.com/image/thumb/Music49/v4/51/33/ad/5133ad66-309d-b03f-8e9e-1c85e4188f44/source/60x60bb.jpg", "artworkUrl100":"https://is2-ssl.mzstatic.com/image/thumb/Music49/v4/51/33/ad/5133ad66-309d-b03f-8e9e-1c85e4188f44/source/100x100bb.jpg", "collectionPrice":1.29, "collectionExplicitness":"notExplicit", "trackCount":1, "copyright":"℗ 2015 Frutex Tracks", "country":"USA", "currency":"USD", "releaseDate":"2015-12-22T08:00:00Z", "primaryGenreName":"Pop"}, 
     {"wrapperType":"collection", "collectionType":"Album", "artistId":295234886, "collectionId":1530350770, "artistName":"Doctor Krápula", "collectionName":"No Disparen (feat. Bukahara) - Single", "collectionCensoredName":"No Disparen (feat. Bukahara) - Single", "artistViewUrl":"https://music.apple.com/us/artist/doctor-kr%C3%A1pula/295234886?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/no-disparen-feat-bukahara-single/1530350770?uo=4", "artworkUrl60":"https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/9a/24/b5/9a24b550-165b-8248-ac5b-d5eb22a1821c/source/60x60bb.jpg", "artworkUrl100":"https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/9a/24/b5/9a24b550-165b-8248-ac5b-d5eb22a1821c/source/100x100bb.jpg", "collectionPrice":0.99, "collectionExplicitness":"notExplicit", "trackCount":1, "copyright":"℗ 2020 Doctor Krápula", "country":"USA", "currency":"USD", "releaseDate":"2020-09-25T07:00:00Z", "primaryGenreName":"Adult Alternative"}]
     });
  });
});
