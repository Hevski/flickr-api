import { SearchService } from './search.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchPhotosComponent } from './search-photos.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('SearchPhotosComponent', () => {
  let component: SearchPhotosComponent;
  let fixture: ComponentFixture<SearchPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPhotosComponent ],
      imports: [HttpClientTestingModule],
      providers: [SearchService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const PHOTO_DATA = [ 
      {
        id: 1,
        title: 'test1',
        url: 'www.test1.com',
      },
      {
        id: 2,
        title: 'test2',
        url: 'www.test2.com',
      },
      {
        id: 3,
        title: 'test3',
        url: 'www.test1.com',
      },
    ]
    fixture = TestBed.createComponent(SearchPhotosComponent);
    component = fixture.componentInstance;
    component.photos = PHOTO_DATA
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders three image elements', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('img').length).toEqual(3);
  });
});
