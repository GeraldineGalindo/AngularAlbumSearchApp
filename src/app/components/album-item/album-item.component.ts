import { Input, Component, OnInit } from '@angular/core';
import { AlbumInfo } from 'src/app/models/AlbumInfo';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {
  @Input() album !: AlbumInfo;
  albumName !: string;
  albumPrice !: number;
  artistName !: string;
  currency !: string;
  constructor() {
    
   }

  ngOnInit(): void {
    this.setUpAlbumData();
  }

  setUpAlbumData(): void{
    if(this.album === undefined || this.album == null){
      this.albumName = "";
      this.artistName = "";
      this.currency = "";
      this.albumPrice = 0;
    }
    else{
      this.albumName = this.album.collectionName;
      this.artistName = this.album.artistName;
      this.albumPrice = this.album.collectionPrice;
      this.currency = this.album.currency;
    }
  }

  hasCover(): boolean{
    if( this.album == undefined || this.album.artworkUrl100 == null){
      return false;
    }
    return true;
  }
  setClasses(){
    let classes = {
      album: true,
    }
    return classes;
  }

}
