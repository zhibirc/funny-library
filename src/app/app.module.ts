import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookComponent} from './book-list/book/book.component';
import {ButtonComponent} from './button/button.component';

@NgModule({
    declarations: [
        AppComponent,
        BookListComponent,
        BookComponent,
        ButtonComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
