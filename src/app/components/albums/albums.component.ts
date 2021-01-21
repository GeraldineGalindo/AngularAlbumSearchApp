import { Component, OnInit } from '@angular/core';
import {AlbumInfo} from '../../models/AlbumInfo';
import {ArtistService} from '../../services/artist.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: AlbumInfo[] = [];
  wasRequested : boolean = false;
  constructor(private artistService:ArtistService) { }

  ngOnInit(): void {
    this.albums = [];
    this.wasRequested = false;
  }

  searchArtistAlbums(artist:string): void{
    if(artist == ""){
      this.wasRequested = false;
    }
    else{
      var albumResult = this.artistService.getArtistAlbums(artist).subscribe(
        data => {
          this.wasRequested = true;
          this.albums = data.results;
        }
      );
    }
  }

  hasAlbumsToShow(): boolean{
    if(this.albums.length == 0){
      return false;
    }
    else{
      return true;
    }
  }

}
