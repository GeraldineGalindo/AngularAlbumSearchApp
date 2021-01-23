import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-text',
  templateUrl: './welcome-text.component.html',
  styleUrls: ['./welcome-text.component.css']
})
export class WelcomeTextComponent implements OnInit {
  welcomeMessage: string = "Welcome, to begin write the name of an artist";
  constructor() { }

  ngOnInit(): void {
  }

}
