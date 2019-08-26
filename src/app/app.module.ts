import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule, MatSelectModule, MatIconModule, MatSidenavModule } from '@angular/material';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    
import { ToastrModule } from 'ngx-toastr';
import { ListingComponent } from './listing/listing.component';
import {MatDividerModule} from '@angular/material/divider';
import { PackagesComponent } from './packages/packages.component';
import { ProductViewComponent } from './product-view/product-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    ListingComponent,
    PackagesComponent,
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    ToastrModule.forRoot({  
      closeButton: true,     
    }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
