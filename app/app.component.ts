import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core'
import {Todo} from './todos/models/todo'
import {ToastComponent} from './toast/component/toast.component'
import {ToastService} from './toast/service/toast.service'
@Component({
    selector: 'my-app',
    templateUrl: "/app/app.html",
    styleUrls:['app/styles/style.css'],
    directives: [ToastComponent]
})

export class AppComponent {
    public message: string = "My wee message here";
    public level: string;
    public time: number;
    public dismisable: boolean;

    constructor(private _toastService: ToastService) {

    }

    addToast() {
        this._toastService.addToast(this.message, this.level, this.time, this.dismisable);
        this.message = undefined;
        this.level = undefined;
        this.time = undefined;
        this.dismisable = undefined;
    }
}