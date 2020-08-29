import { ModalComponent } from './ui-components/modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppComponent } from './app.component';
import { SearchPhotosComponent } from './search-photos/search-photos.component';
import { PhotoDisplayModalComponent } from './search-photos/photo-display-modal/photo-display-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchPhotosComponent,
    PhotoDisplayModalComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PhotoDisplayModalComponent]
})
export class AppModule { }
