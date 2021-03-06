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
  elementsPerPage: number = 8;
  areAllShown: boolean = false;
  ascendant: boolean = true;
  constructor(private artistService:ArtistService) { }

  ngOnInit(): void {
    this.albums = [];
    this.wasRequested = false;
  }

  filterResultsByArtist(artist:string):void{
    this.albums = this.albums.filter(function(album){
      return album.artistName.toLocaleUpperCase().includes(artist.toUpperCase());
    })    
  }

  orderResult():void{
    if(this.ascendant){
      this.albums.sort(this.compareAsc);
    }
    else{
      this.albums.sort(this.compareDes);
    }
  }
  searchArtistAlbums(artist:string): void{
    if(artist == ""){
      this.wasRequested = false;
    }
    else{
      var albumResult = this.artistService.getArtistAlbums(artist).subscribe(
        data => {
          this.processResult(data, artist);
        },
        err => console.log('Http Error', err)
      );
    }
  }

  processResult(data:any, artist:string):void{
    this.wasRequested = true;
          this.albums = data.results;
          this.filterResultsByArtist(artist);
          this.orderResult();
          this.actualPage = 1;
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
      this.ascendant = true;
    }
    if(criteria =="Descendant"){
      this.albums.sort(this.compareDes);
      this.ascendant = false;
    }

  }

  decreasePerPage(){
    if(this.elementsPerPage == this.albums.length && this.elementsPerPage % 2 !=0){
      this.elementsPerPage -= 1;
    }
    if(this.elementsPerPage - 2 <= 0){
      this.elementsPerPage = 2;
    }
    else{
      this.elementsPerPage -= 2;
    }
  }

  increasePerPage(){
    if(this.elementsPerPage == 1){
      this.elementsPerPage = 2;
    }
    if(this.elementsPerPage < this.albums.length){
      this.elementsPerPage += 2;
    }
    if(this.elementsPerPage == this.albums.length){
      this.elementsPerPage = this.albums.length;
    }
  }

  seeAllResults(){
    this.elementsPerPage= this.albums.length;
    this.actualPage = 1;
    this.areAllShown = true;
  }

  resetPagination(){
    this.elementsPerPage = 8;
    this.areAllShown = false;
  }


}
