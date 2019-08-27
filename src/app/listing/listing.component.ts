import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clothing = [
    'Bridal Wear',
    'Coats',
    'Beach Wear',
    'Jackets',
    'Knit Wear',
    'Jeans',
    'Park/Garden',
    'Skirts',
    'Country Club',
    'Shorts',
    'Tops',
    'Leather'
  ]
  designer = [
    'Katrina',
    'Rahul',
    'Manish',
    'Prerna',
    'Swetha',
    'Amrutha'
  ]
  color = [
    'Red',
    'Green',
    'Pink',
    'Yellow',
    'Blue'
  ]

}
