import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookComponent} from './book-list/book/book.component';
import {ButtonComponent} from './button/button.component';
import {ModalAddComponent} from './modal-add/modal-add.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [
        AppComponent,
        BookListComponent,
        BookComponent,
        ButtonComponent,
        ModalAddComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}
