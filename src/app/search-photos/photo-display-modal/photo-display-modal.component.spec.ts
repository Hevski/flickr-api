import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoDisplayModalComponent } from './photo-display-modal.component';

describe('PhotoDisplayModalComponent', () => {
  let component: PhotoDisplayModalComponent;
  let fixture: ComponentFixture<PhotoDisplayModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoDisplayModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoDisplayModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
