import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; 

declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private toastr: ToastrService
    ) { }



  ngOnInit() {
  //fixed header 
  $(document).scroll(() => {
      if ($(window).scrollTop() >= 200) {
          $('.bottom_header').addClass('fixed-header');
      }
      else {
          $('.bottom_header').removeClass('fixed-header');
      }
  });
//responsive nav
$(document).ready(() => {
	$(".nav_2 > ul > li > a.hamburger > img").click(function(){
		$(".side_menu").css("width","280px");
		$("body").css({"position":"fixed","width":"100%"});
	});
	$(".side_menu > ul > li > a > span.close").click(function(){
		$(".side_menu").css("width","0px");
		$("body").css({"position":"inherit","width":"100%"});
	});
	$(".nav_2 > ul > li > a.search > img").click(function(){
		$(".search_input").css("left","34px");
	});
	$(".search_input span.close_input").click(function(){
    $(".search_input").css("left","105%");
    $(".search_input input").val(""); 
  });
  $(".last_list").click(function(){
		$(".search_input").css("left","10px");
	});
	$(".side_menu > ul > li > span").click(function(){
		$(this).next(".sidenav_wrapper").slideToggle(200);
		$(this).find("img").toggleClass("rotate");
	});
});

  }

 
}
