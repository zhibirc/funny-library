import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'Library';

    @Output() addBook = new EventEmitter();
}
