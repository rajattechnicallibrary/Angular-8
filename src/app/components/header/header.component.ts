import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).scroll(function(){
      if ($(window).scrollTop() >= 200) {
          $('.bottom_header').addClass('fixed-header');
         
      }
      else {
          $('.bottom_header').removeClass('fixed-header');
      }
  });
  }

}
