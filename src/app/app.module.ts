import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumItemComponent } from './components/album-item/album-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SearchArtistAlbumsComponent } from './components/search-artist-albums/search-artist-albums.component';
import { EmptyResultComponent } from './components/layout/empty-result/empty-result.component';
import { WelcomeTextComponent } from './components/layout/welcome-text/welcome-text.component';
import { OrderResultOptionsComponent } from './components/order-result-options/order-result-options.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumItemComponent,
    HeaderComponent,
    SearchArtistAlbumsComponent,
    EmptyResultComponent,
    WelcomeTextComponent,
    OrderResultOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
