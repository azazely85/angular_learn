import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PanelComponent } from './components/panel/panel.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IdService } from './services/id.service';
import { BooksService } from './services/books.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    AddBookComponent,
    EditBookComponent,
    AboutComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BooksService, IdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
