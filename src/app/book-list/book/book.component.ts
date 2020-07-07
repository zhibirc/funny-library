import {Component, OnInit} from '@angular/core';

export interface Book {
    id: number;
    title: string;
    text: string;
    date: any;
}

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.scss']
})

export class BookComponent implements OnInit {

    constructor () {
    }

    ngOnInit (): void {
    }

}
