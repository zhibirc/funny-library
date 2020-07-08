import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'Library';

    addBook (): void {
        console.log('adding book works');
    }
}
