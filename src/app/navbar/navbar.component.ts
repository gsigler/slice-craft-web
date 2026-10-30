import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  skipToContent(event: Event) {
    event.preventDefault();
    const main = document.getElementById('main');
    if (main) {
      main.focus();
      main.scrollIntoView();
    }
  }

  ngOnInit() {
  }

}
