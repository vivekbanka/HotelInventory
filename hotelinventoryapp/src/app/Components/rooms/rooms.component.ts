import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {

  hotelName: string = "hilton hotel";

  constructor() {

  }

  ngOnInit(): void {
      
  }
}
