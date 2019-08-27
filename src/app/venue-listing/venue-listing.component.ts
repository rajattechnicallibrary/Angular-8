import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venue-listing',
  templateUrl: './venue-listing.component.html',
  styleUrls: ['./venue-listing.component.scss']
})
export class VenueListingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  clothing = [
    'Banquet Hall',
    'Lawn/Farmhouse',
    'Golf Club',
    'Hotel',
    'Farm/Barn',
    'Vineyyard/Winery',
    'Park/Garden',
    'Mansion',
    'Country Club',
    'Restaurants',
    'House of Worship'
  ]
  designer = [
    '0-1000',
    '1000-2000',
    '2000-3000',
    '3000-4000',
    '4000-5000',
    '5000-6000'
  ]
  color = [
    '5',
    '4',
    '3',
    '2',
    '1'
  ]
}
