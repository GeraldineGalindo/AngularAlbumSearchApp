import { Input, Component, OnInit } from '@angular/core';
import { AlbumInfo } from 'src/app/models/AlbumInfo';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {
  @Input() album !: AlbumInfo;
  constructor() { }

  ngOnInit(): void {
  }

  setClasses(){
    let classes = {
      album: true,
    }
    return classes;
  }

}
