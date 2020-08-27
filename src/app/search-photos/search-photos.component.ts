import { SearchService } from './search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-photos',
  templateUrl: './search-photos.component.html',
  styleUrls: ['./search-photos.component.css']
})
export class SearchPhotosComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search() {
    this.searchService.searchWord().subscribe(
      res => {
        console.log(res)
      }
    )
  }

}
