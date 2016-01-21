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
        <div *ngFor="#toast of toasts" class="alert toast alert-{{toast.level}} row" role="alert">
            <div class="toast-text-container">
                <span>{{toast.message}}</span>
            </div>
            <div *ngIf="toast.dismisable" class="toast-dismiss-container">
                <button class="btn dismiss-btn" (click)="dismisToast(toast)">X</button>
            </div>
        </div>
    </div>`,
    styleUrls: ["app/toast/style/toast.style.css"]
})

export class ToastComponent {
    public toasts: Toast[];
    constructor(private _toastService: ToastService) {
    }

    ngOnInit() {
        this.toasts = this._toastService.getToasts();
    }
    
    dismisToast(toast:Toast) {
        this._toastService.dismisToast(toast);
    }
}
