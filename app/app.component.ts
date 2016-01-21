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
    public position: string;
    public levels: string[];
    public positions:string[];

    constructor(private _toastService: ToastService) {

    }
    
    ngOnInit() {
        this.levels = this._toastService.getLevels();
        this.positions = this._toastService.getPositions();
        this._toastService.addToast("Your latest obomination", this.level, -1, true);
        // this._toastService.addToast("Your latest obomination mark 2", this.level, -1, true);
    }

    addToast() {
        console.log(this.level);
        this._toastService.addToast(this.message, 
            this.level, 
            this.time, 
            this.dismisable, 
            this.position
        );
    }
    
    setLevel(level: string) {
        this.level = level;
        console.log(level);
    }
    
    setPosition(position: string) {
        this._toastService.setPosition(position);
    }
}