import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
          `nav{
          background: #E9967A;
          }
          li{
            font-size:40px;
          }
          .logoHeader{
            width:70px;
            heident : 200px;
            padding : 0;
            background:black
          }
          `
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
