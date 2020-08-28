import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-display',
  templateUrl: './photo-display.component.html',
  styleUrls: ['./photo-display.component.css']
})
export class PhotoDisplayComponent implements OnInit {
  @Input() photoTitle: string

  constructor() { }

  ngOnInit() {
  }

}
