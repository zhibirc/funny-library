import {Component, OnInit} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'app-button',
    styleUrls: ['./button.component.scss'],
    // looks like JSX, wow!
    template: `<button
        [classList]="classList"
        (click)="handlers.click($event.target)"
        [title]="title"
    ><mat-icon>add</mat-icon></button>`
})

export class ButtonComponent implements OnInit {
    classList: string[] = ['button'];
    title: string;
    handlers = {
        click: event => {

        }
    };

    constructor () {
    }

    ngOnInit (): void {
        console.log('ngOnInit: BUTTON');
        //this.handlers.click =
    }
}
