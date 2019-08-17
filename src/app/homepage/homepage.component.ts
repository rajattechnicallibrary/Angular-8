import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  successmsg(){  
    this.toastr.success("Toastr Success message",'Success')  
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
