import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core'
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
    
    ngOnInit() {
        this._toastService.addToast("Your latest obomination", this.level, -1, true);
        this._toastService.addToast("Your latest obomination mark 2", this.level, -1, true);
    }

    addToast() {
        this._toastService.addToast(this.message, this.level, this.time, this.dismisable);
        this.message = "My wee message here";
        this.level = undefined;
        this.time = undefined;
        this.dismisable = undefined;
    }
}