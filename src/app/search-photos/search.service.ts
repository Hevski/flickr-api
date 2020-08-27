import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  searchWord() {
    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
    //find the correct url for this
    const params = `api_key=${environment.flickr.key}`
    return this.http.get(url + params)
  } 
}
