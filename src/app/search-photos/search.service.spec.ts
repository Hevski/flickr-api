import { TestBed } from '@angular/core/testing';
import { SearchService } from './search.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('SearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [SearchService, HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service).toBeTruthy();
  });
});
