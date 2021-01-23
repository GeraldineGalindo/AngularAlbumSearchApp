import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-result-options',
  templateUrl: './order-result-options.component.html',
  styleUrls: ['./order-result-options.component.css']
})
export class OrderResultOptionsComponent implements OnInit {

  @Output() orderResults: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onAscendantOrder(){
    this.orderResults.emit("Ascendant");
  }

  onDescendantOrder(){
    this.orderResults.emit("Descendant");
  }

}
