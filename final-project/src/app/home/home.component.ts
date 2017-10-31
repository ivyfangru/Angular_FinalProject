import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users = [
  		{ email: 'fangruivy@gmail.com', password: '123456', firstName: 'Ru', lastName: 'Fang'}
    ];

  chat = [
    { from: 'Ru Fang', avatarUrl: '', message: 'Hello world!' },
    ];

  constructor() { }

  ngOnInit() {
  }

}
