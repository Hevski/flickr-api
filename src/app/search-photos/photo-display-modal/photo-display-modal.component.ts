import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-display-modal',
  templateUrl: './photo-display-modal.component.html',
  styleUrls: ['./photo-display-modal.component.css']
})
export class PhotoDisplayModalComponent implements OnInit {
  @Input() title: string;

  constructor(private modalService: NgbActiveModal) { }

  ngOnInit() {
  }

  /**
 * Closes Modal
 */
  closeModal() {
    this.modalService.close();
  }

}
