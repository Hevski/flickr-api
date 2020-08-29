import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppComponent } from './app.component';
import { SearchPhotosComponent } from './search-photos/search-photos.component';
import { PhotoDisplayComponent } from './photo-display/photo-display.component';
import { AppRoutingModule } from './app-routing.module';
import { PhotoDisplayModalComponent } from './search-photos/photo-display-modal/photo-display-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchPhotosComponent,
    PhotoDisplayComponent,
    PhotoDisplayModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
