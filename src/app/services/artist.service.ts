import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  albumUrl !: 'https://itunes.apple.com/search';
  constructor(private http:HttpClient) { }

  getArtistAlbums(artist:string):Observable<any>{
    const url = 'https://itunes.apple.com/search';
    return this.http.post<any>(`${url}?term=${artist}&entity=album`,artist);
  }
}
