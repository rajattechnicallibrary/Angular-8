import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; 

declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

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

  register(){
    this.toastr.success("Comming Soon",'Success')  

  }

  signIn(){
    this.toastr.success("Comming Soon",'Success')  

  }

}
