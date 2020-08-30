import { SearchService, Photo } from './../search.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-display-modal',
  templateUrl: './photo-display-modal.component.html',
  styleUrls: ['./photo-display-modal.component.css']
})
export class PhotoDisplayModalComponent implements OnInit {
  @Input() title: string;
  @Input() photoTitle: string;
  @Input() photo: Photo;
  photoInfo: any;

  constructor(private modalService: NgbActiveModal, private searchService: SearchService) { }

  ngOnInit() {
    if (this.photo) {
      this.searchService.getInfo(this.photo.id).subscribe(
        res => {
          this.photoInfo = res['photo']
        }
      )
    }
  }

  /**
 * Closes Modal
 */
  closeModal() {
    this.modalService.close();
  }

}
