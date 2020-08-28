import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppComponent } from './app.component';
import { SearchPhotosComponent } from './search-photos/search-photos.component';
import { PhotoDisplayComponent } from './photo-display/photo-display.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchPhotosComponent,
    PhotoDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
