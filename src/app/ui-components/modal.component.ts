import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal',
    template: `
    <div class="modal-header">
      <h4 class="modal-title">{{ title }}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <ng-content select="[body]"></ng-content>
    <ng-content select="[footer]"></ng-content>
    <div class="modal-body">
      {{ body }}
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="activeModal.close(true)">
        Confirm
      </button>
      <button type="button" class="btn btn-outline-dark" ngbAutofocus (click)="activeModal.dismiss()">Close</button>
    </div>
  `,
})
export class ModalComponent implements OnInit {
    @Input() title = '';
    body: string;

    constructor(public activeModal: NgbActiveModal) { }

    ngOnInit() { }
}