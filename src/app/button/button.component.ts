import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-button',
    styleUrls: ['./button.component.scss'],
    template: `<button
        class="{{baseClassName}}"
        [title]="title"
    ><mat-icon>add</mat-icon></button>`
})

export class ButtonComponent implements OnInit {
    baseClassName = 'button-add';
    title = 'Add new book to collection';

    constructor () {
    }

    ngOnInit (): void {
        console.log('ngOnInit: BUTTON');
    }
}
