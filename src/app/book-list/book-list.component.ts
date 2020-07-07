import { Component, OnInit } from '@angular/core';
import { Book } from './book/book.component';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})

export class BookListComponent implements OnInit {
    public books: Array<Book> = [];

    constructor () {
    }

    // fires after component is ready, it's lifecycle hook
    ngOnInit (): void {
        console.log('ngOnInit: ', this.books);
    }
}
