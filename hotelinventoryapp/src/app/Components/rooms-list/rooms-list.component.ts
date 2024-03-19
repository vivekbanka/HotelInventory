import { Component, Input, OnInit } from '@angular/core';
import {NgIf, NgFor, DatePipe} from '@angular/common'
import {roomslist} from '../rooms/rooms'
@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [NgFor,NgIf, DatePipe],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent implements OnInit {

  @Input() Roomlists : roomslist[] =[]
  constructor() {

  }

  ngOnInit(): void {
      
  }
}
