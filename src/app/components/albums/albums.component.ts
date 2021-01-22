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
  actualPage: number = 1;
  pageNumber: number = 5;
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
          this.albums = this.albums.filter(function(album){
            return album.artistName.includes(artist);
          })
          this.albums.sort(this.compareAsc);
        },
        err => console.log('Http Error', err)
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

  compareAsc(a:AlbumInfo, b:AlbumInfo): number{
    const albumA = a.collectionName.toUpperCase();
    const albumB = b.collectionName.toUpperCase();

    let comparison = 0;
    if(albumA > albumB){
      comparison = 1;
    }
    else if(albumA < albumB){
      comparison = -1;
    }
    return comparison;
  }

  compareDes(a:AlbumInfo, b:AlbumInfo): number{
    const albumA = a.collectionName.toUpperCase();
    const albumB = b.collectionName.toUpperCase();

    let comparison = 0;
    if(albumA < albumB){
      comparison = 1;
    }
    else if(albumA > albumB){
      comparison = -1;
    }
    return comparison;
  }

  orderByCriteria(criteria: string): void{
    if(criteria == "Ascendant"){
      this.albums.sort(this.compareAsc);
    }
    if(criteria =="Descendant"){
      this.albums.sort(this.compareDes);
    }

  }

  decreasePerPage(){
    if(this.pageNumber - 5 <= 0){
      this.pageNumber = 1;
    }
    else{
      this.pageNumber -= 5;
    }
  }

  increasePerPage(){
    if(this.pageNumber == 1){
      this.pageNumber = 0;
    }
    this.pageNumber += 5;
  }


}
