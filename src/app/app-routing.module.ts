import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from '../app/homepage/homepage.component'
import { ListingComponent } from './listing/listing.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  { 
    path: 'homepage', 
    component: HomepageComponent 
  },
  { 
    path: 'header', 
    component: HeaderComponent 
  },
  { 
    path: 'footer', 
    component: FooterComponent 
  },
  { 
    path: 'listing', 
    component: ListingComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
