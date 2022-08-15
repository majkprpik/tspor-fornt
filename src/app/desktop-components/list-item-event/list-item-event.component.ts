import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item-event',
  templateUrl: './list-item-event.component.html',
  styleUrls: ['./list-item-event.component.scss'],
})
export class ListItemEventComponent implements OnInit {
  @Input('event') event: any;
  add = false;
  
  participantsLength: number = 0;
  arrayLength: number = 0;

  constructor() {
    this.participantsLength = (Math.floor((Math.random() * 10) % 4) + 1) * 2;
    while(((++this.arrayLength)^2) < this.participantsLength) {}
    console.log(this.arrayLength)
  }
  
  ngOnInit(): void {
    this.calcPartArray();
  }

  calcPartArray() {
    
  }

  getRandomAvatar() {
  //   return Math.floor((Math.random() * 3) % 2) ? "" : 'url(https://avatars.dicebear.com/api/avataaars/' + Math.random() + '.svg)' 
  // }
    return 'url(https://avatars.dicebear.com/api/avataaars/a.svg)' 
  }

  counter() {
    return new Array(this.participantsLength);
  }
}
