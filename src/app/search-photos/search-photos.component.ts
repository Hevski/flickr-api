import { SearchService } from './search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-photos',
  templateUrl: './search-photos.component.html',
  styleUrls: ['./search-photos.component.css']
})
export class SearchPhotosComponent implements OnInit {
  searchTerm: string;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search(event: any) {
    this.searchTerm = event.target.value.toLowerCase();
    // event.preventDefault();
    console.log(this.searchTerm)
    this.searchService.searchWord(this.searchTerm).toPromise()
    .then(res => {
      console.log(res)
    })
  }

}
