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
  @Input() photo: any;
  @Input() photoInfo: any;

  constructor(private modalService: NgbActiveModal) { }

  ngOnInit() {
    console.log(this.photoInfo)
  }

  /**
 * Closes Modal
 */
  closeModal() {
    this.modalService.close();
  }

}
