import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-root',
  template:'<!-- header --><!-- routes will be rendered here --><router-outlet></router-outlet>  <!-- footer --><app-footer></app-footer>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles:[]
})
export class AppComponent {
  title = 'TheEventKart';

  ngOnInit(): void {
    $(document).ready(() => {
      $('#elementId').css({'background-color': 'yellow', 'font-size': '200%'});
    });
  }
}
