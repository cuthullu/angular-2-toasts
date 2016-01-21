import {Injectable} from 'angular2/core';
import {Toast} from '../model/toast'
import {ToastRack} from '../model/toastRack'

@Injectable()
export class ToastService {
    public toasts: Toast[] = [];
    public toastRack: ToastRack = new ToastRack();
    
    constructor() { }

    addToast(message: string, level?: string, lifetime?: number, dismisable?: boolean, position?: string) {
        var toast = this._makeToast(message, level, lifetime, dismisable);
        this.toastRack.setPosition(position);
         
        this.toasts.push(toast);
        if(toast.lifetime > -1) {
            setTimeout(() =>
                this.dismisToast(toast), toast.lifetime
            );
        }else {
            toast.dismisable = true;
        }
        return toast;
    }
    
    setPosition(position: string) {
        this.toastRack.setPosition(position);
    }

    dismisToast(toast: Toast) {
        this.toasts.splice(this.toasts.indexOf(toast), 1);
    }

    getToasts() {
        return this.toasts;
    }
    
    private _makeToast(message: string, level?: string, lifetime?: number, dismisable?: boolean, position?:string) {
        return new Toast(message, level, lifetime, dismisable);
    }
    
    getPositions() {
        return this.toastRack.positions; 
    }
    
    getLevels() {
        return ["success", "info", "warning", "danger"];
    }
}