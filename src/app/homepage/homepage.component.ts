import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; 

declare var $:any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    $(document).ready(() => {
      $(".know_more").click(function(){
        $(".know_more_sec").slideToggle("500");
        $(this).toggleClass("less");
        if($(this).hasClass("less")){
          $(this).text("READ LESS")
        }
        else{
          $(this).text("KNOW MORE")
        }
      });
    });



  }

  successmsg(){  
    this.toastr.success("Search Result Successfully Found !!!",'Success')  
  }
  errorsmsg(){  
    this.toastr.error("Toastr Success message",'Success')  
  }
  infotoastr(){  
    this.toastr.info("Toastr Success message",'Success')  
  }
  toastrwaring(){  
    this.toastr.warning("Toastr Success message",'Success')  
  }

}
