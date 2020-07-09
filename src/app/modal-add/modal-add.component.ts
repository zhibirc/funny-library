import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-modal-add',
    templateUrl: './modal-add.component.html',
    styleUrls: ['./modal-add.component.scss']
})

export class ModalAddComponent implements OnInit {
    baseClassName = 'modal-add';

    @Output() creator = new EventEmitter<object>();

    constructor () {
    }

    create ( data ): void {
        this.creator.emit(data);
    }

    ngOnInit (): void {
        console.log('ngOnInit --> ModalAddComponent');
    }
}
