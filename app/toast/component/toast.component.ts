import {Component, Inject} from 'angular2/core'
import {OnInit} from 'angular2/core'
import {Input, Output, EventEmitter} from 'angular2/core'
import {RouteParams} from "angular2/router"

import {Toast} from '../model/toast'
import {ToastService} from '../service/toast.service'
@Component({
    selector: 'toast-container',
    template: `
    <div class="toast-container">
        <div *ngFor="#toast of toasts" class="alert toast alert-{{toast.level}}" role="alert">
            {{toast.message}}
        </div>
    </div>`,
    styles: [`
    .toast {
        position: absolute;
        top: 0;
        z-index: 40;
    }
    `]

})

export class ToastComponent {
    public toasts: Toast[];
    constructor(private _toastService: ToastService) {
    }

    ngOnInit() {
        this.toasts = this._toastService.getToasts();
    }
}
