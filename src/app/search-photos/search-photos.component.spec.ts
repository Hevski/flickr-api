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
    fixture = TestBed.createComponent(SearchPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
