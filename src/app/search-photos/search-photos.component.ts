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
  noPhotos: boolean = false;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  /**
   * Search a users input
   * @param event 
   */
  search(event: any) {
    this.searchTerm = event.target.value.toLowerCase();
    this.searchService.searchWord(this.searchTerm).subscribe(
      res => {
        this.photos = res
        this.photos.length < 1 ? this.noPhotos = true : this.noPhotos = false;
      }
    )
  }

  /**
   * on scroll, concat results to photo array to make infinite scroll
   */
  onScroll() {
    this.searchService.searchWord(this.searchTerm)
    .toPromise()
    .then(res => {
      this.photos = this.photos.concat(res);
    });
  }

  getInfo(photoId) {
    this.searchService.getInfo(photoId).subscribe(
      res => {
        console.log(res)
      }
    )
  }

}
