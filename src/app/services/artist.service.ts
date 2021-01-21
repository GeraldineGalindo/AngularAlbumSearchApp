import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlbumInfo } from '../models/AlbumInfo';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  albumUrl !: 'https://itunes.apple.com/search';
  constructor(private http:HttpClient) { }

  getArtistAlbums(artist:string):Observable<any>{
    const url = 'https://itunes.apple.com/search';
    return this.http.get<any>(`${url}?term=${artist}&entity=album`);
  }
}
