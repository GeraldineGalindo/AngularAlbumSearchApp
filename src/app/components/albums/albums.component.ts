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
  constructor(private artistService:ArtistService) { }

  ngOnInit(): void {
    var albumResult = this.artistService.getArtistAlbums().subscribe(
      data => {
        this.albums = data.results;
      }
    );
    
     
  }

}
