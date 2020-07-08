import { Component, OnInit } from '@angular/core';
import { Book } from './book/book.component';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})

export class BookListComponent implements OnInit {
    classList: string[] = ['book-list'];
    books: Book[] = [];

    constructor () {
    }

    addBook ( book: Book ): Book {
        this.books.push(book);

        return book;
    }

    deleteBook ( id: number ): void {
        this.books.splice(this.books.findIndex(item => item.id === id), 1);
    }

    count (): number {
        return this.books.length;
    }

    // fires after component is ready, it's lifecycle hook
    ngOnInit (): void {
        console.log('ngOnInit: ', this.books);
    }
}
