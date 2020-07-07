import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-modal-add',
    templateUrl: './modal-add.component.html',
    styleUrls: ['./modal-add.component.scss']
})
export class ModalAddComponent implements OnInit {
    classList: string[] = ['modal-add'];

    constructor () {
    }

    ngOnInit (): void {
        console.log('ngOnInit --> ModalAddComponent');
    }

}
