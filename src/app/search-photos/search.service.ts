import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface Photo {
  farm: string;
  id: string;
  secret: string;
  server: string;
  title: string;
}

export interface FlickrOutput {
  photos: {
    photo: Photo[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  searchWord(searchTerm: string) {
    const FLICKR_API_KEY = environment.flickr.api_key
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_API_KEY}&text=${searchTerm }&format=json&nojsoncallback=1`
    return this.http.get(url).pipe(map((res: FlickrOutput) => {
      const photoArray = [];
      res.photos.photo.forEach((photo: Photo) => {
        const photoObject = {
          url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`,
          title: photo.title
        };
        photoArray.push(photoObject);
      });
      return photoArray;
    }))
  } 
}