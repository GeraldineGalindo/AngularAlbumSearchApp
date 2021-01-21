import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumItemComponent } from './components/album-item/album-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SearchArtistAlbumsComponent } from './components/search-artist-albums/search-artist-albums.component';
import { EmptyResultComponent } from './components/layout/empty-result/empty-result.component';
import { WelcomeTextComponent } from './components/layout/welcome-text/welcome-text.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumItemComponent,
    HeaderComponent,
    SearchArtistAlbumsComponent,
    EmptyResultComponent,
    WelcomeTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
