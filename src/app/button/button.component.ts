import {Component, OnInit} from '@angular/core';

@Component({
    styleUrls: ['./button.component.scss'],
    // looks like JSX, wow!
    template: `<button [class]="className">{{ text }}</button>`
})

export class ButtonComponent implements OnInit {
    public className = 'button';
    public text: string;

    public constructor () {
        this.text = '';
    }

    public ngOnInit (): void {
    }
}
