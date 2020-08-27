import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-photos',
  templateUrl: './search-photos.component.html',
  styleUrls: ['./search-photos.component.css']
})
export class SearchPhotosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  search() {
    console.log('hello')
  }

}
