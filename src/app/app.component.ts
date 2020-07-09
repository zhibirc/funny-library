import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    isModalAddActive = false;
    title = 'Library';

    openModalAdd (): void {
        this.isModalAddActive = true;
        console.log('open modal window');
    }
}
