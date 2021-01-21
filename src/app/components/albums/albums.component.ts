import { Component, OnInit } from '@angular/core';
import {AlbumInfo} from '../../models/AlbumInfo';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: AlbumInfo[] = [];
  constructor() { }

  ngOnInit(): void {
    this.albums = [
      {
         coverImage : "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/08/b5/84/08b58458-033c-9feb-445d-a6fc3e153cdc/source/100x100bb.jpg",
         albumName : "Night Visions",
         artist : "Imagine Dragons",
         price: 6.92       
      },
      {
        coverImage : "https://is1-ssl.mzstatic.com/image/thumb/Music18/v4/a2/ea/82/a2ea827b-22e4-3592-f3cb-e897d2f7418d/source/100x100bb.jpg",
        albumName : "Suicide Squad: The Album",
        artist : "Lil Wayne, Wiz Khalifa & Imagine Dragons",
        price: 11.99       
     }
    ]
    
  }

}
