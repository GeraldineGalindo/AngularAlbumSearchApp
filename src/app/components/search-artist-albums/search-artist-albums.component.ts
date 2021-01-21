import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-artist-albums',
  templateUrl: './search-artist-albums.component.html',
  styleUrls: ['./search-artist-albums.component.css']
})
export class SearchArtistAlbumsComponent implements OnInit {
  @Output() requestedArtistAlbums : EventEmitter<string> = new EventEmitter();
  artist : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.requestedArtistAlbums.emit(this.artist);
  }

}
