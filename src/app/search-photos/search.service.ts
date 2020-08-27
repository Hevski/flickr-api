import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  searchWord() {
    const FLICKR_API_KEY = environment.flickr.api_key
    const AUTH_TOKEN = environment.flickr.auth_token
    const SIG = environment.flickr.api_sig

    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&auth_token=${AUTH_TOKEN}&api_sig=${SIG}`
    
    //find the correct url for this
    // const params = `api_key=${environment.flickr.key}`
    return this.http.get(url)
  } 
}
