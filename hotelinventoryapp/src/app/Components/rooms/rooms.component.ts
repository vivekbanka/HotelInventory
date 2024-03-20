import { Component, NgModule, OnInit,Pipe } from '@angular/core';
import {NgIf, NgFor, DatePipe} from '@angular/common'
import { rooms, roomslist } from './rooms';
import { RoomsListComponent } from "../rooms-list/rooms-list.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-rooms',
    standalone: true,
    templateUrl: './rooms.component.html',
    styleUrl: './rooms.component.scss',
    imports: [NgIf, NgFor, DatePipe, RoomsListComponent, HeaderComponent]
})

export class RoomsComponent implements OnInit {

  hotelName: string = "hilton hotel";
  numberofrooms: number = 20;
  btoggle: boolean= false;
  objrooms:rooms = {
    roomsAvailable : 20,
    bookedRooms :10,
    toalRooms: 30
  }
  rolist : roomslist [] = [
    
  ]
  constructor() {

  }

  ngOnInit(): void {
      this.rolist = [
        {
          roomType: "Deluxe",
          price: 100,
          photos:"https://unsplash.com/photos/an-interior-of-modern-room-in-luxury-hotel-s4yfYIz964U",
          amenities:'dish, swimmung pool, xbox',
          checkInTime: new Date('11-NOV-2021'),
          checkOutTime: new Date('23-NOV-2021')
          
        },
        {
          roomType: "Private suit",
          price: 1000,
          photos:"https://unsplash.com/photos/an-interior-of-modern-room-in-luxury-hotel-s4yfYIz964U",
          amenities:'dish, swimmung pool, xbox',
          checkInTime: new Date('14-NOV-2021'),
          checkOutTime: new Date('23-NOV-2021')
          
        }
      ]
  }

  toggle() {
      this.btoggle = !this.btoggle;
  }
  onSelectedRoom (room:roomslist) {
    console.log(room)
  }
}
