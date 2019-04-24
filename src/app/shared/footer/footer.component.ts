import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
   `
    .fa {
      padding: 15px;
      font-size:15px;
      text-align: center;
      text-decoration: none;
      margin: 5px 2px;
      border-radius: 50%;
      }
      .fa:hover {
          opacity: 0.7;
          background: #B6240A;
      }
      hr{
        background: #B6240A;
      }
      p{
        color: #E9967A;
        opacity: 0.4;
      }
      .fa-facebook {
        background: #FDE6B7;
        color: #E9967A;
         opacity: 0.4;
      }
      .fa-linkedin {
        background: #FDE6B7;
        color: #E9967A;
         opacity: 0.4;
      }
      .fa-instagram {
        background: #FDE6B7;
        color: #E9967A;
         opacity: 0.4;
      }
      .fa-twitter {
        background: #FDE6B7;
        color: #E9967A;
         opacity: 0.4;
      }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
