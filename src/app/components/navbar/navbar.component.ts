import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public TEXT = { 
    brand:'Community',
    notification:'Notification',
    forum:'Forum',
    profile:'Profile'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
