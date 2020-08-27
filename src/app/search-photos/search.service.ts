import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  searchWord(searchTerm: string) {
    const FLICKR_API_KEY = environment.flickr.api_key
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_API_KEY}&text=${searchTerm }&format=json&nojsoncallback=1`
    return this.http.get(url)
  } 
}
