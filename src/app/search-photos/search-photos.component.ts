import { PhotoDisplayModalComponent } from './photo-display-modal/photo-display-modal.component';
import { SearchService, Photo } from './search.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-search-photos',
  templateUrl: './search-photos.component.html',
  styleUrls: ['./search-photos.component.css']
})
export class SearchPhotosComponent implements OnInit {
  searchTerm: string;
  photos: Array<any> = [];
  noPhotos: boolean = false;

  constructor(
    private searchService: SearchService, 
    private modalService: NgbModal,
  ) { }

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

  /**
   * Opens modal to display selected photo
   * @param photo 
   */
  openModal(photo: Photo) {
    const modalRef = this.modalService.open(PhotoDisplayModalComponent, {
      windowClass: 'photoDisplayModal',
      keyboard: false,
      backdrop: 'static',
      size: 'xl',
      centered: true
    });
    modalRef.componentInstance.title = 'Photo Details';
    modalRef.componentInstance.photo = photo;
    modalRef.componentInstance.photoTitle = photo.title;
  }

}
