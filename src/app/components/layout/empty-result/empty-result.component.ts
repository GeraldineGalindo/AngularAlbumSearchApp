import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-result',
  templateUrl: './empty-result.component.html',
  styleUrls: ['./empty-result.component.css']
})
export class EmptyResultComponent implements OnInit {
  advice: string = "The artist whom you are looking for was not found";
  constructor() { }

  ngOnInit(): void {
  }

}
