import { SearchService } from './search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-photos',
  templateUrl: './search-photos.component.html',
  styleUrls: ['./search-photos.component.css']
})
export class SearchPhotosComponent implements OnInit {
  searchTerm: string;
  photos: Array<any> = [];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search(event: any) {
    this.searchTerm = event.target.value.toLowerCase();
    this.searchService.searchWord(this.searchTerm).toPromise()
    .then(res => {
      this.photos = res;
      console.log(this.photos)
    })
  }

  onScroll() {
    this.searchService.searchWord(this.searchTerm)
    .toPromise()
    .then(res => {
      this.photos = this.photos.concat(res);
    });
  }

}
