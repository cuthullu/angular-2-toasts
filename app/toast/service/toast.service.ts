import {Injectable} from 'angular2/core';
import {Toast} from '../model/toast'

@Injectable()
export class ToastService {
    public toasts: Toast[] = [];
    private LIFETIME_DEFULT = 5000;
    private LEVEL_DEFAULT = "info"
    private DISMISABLE_DEFAULT = false;
    constructor() { }

    addToast(message: string, level?: string, lifetime?: number, dismisable?: boolean) {
        level = level === undefined ? this.LEVEL_DEFAULT : level;
        lifetime = lifetime === undefined ? this.LIFETIME_DEFULT : lifetime;
        dismisable = dismisable === undefined ? this.DISMISABLE_DEFAULT : dismisable;

        var toast = new Toast(message, level, lifetime, dismisable);
        this.toasts.push(toast);
        if(toast.lifetime > -1) {
            setTimeout(() =>
                this.toasts.splice(this.toasts.indexOf(toast, 1)), toast.lifetime
            );
        }else {
            toast.dismisable = true;
        }
    }

    dismisToast(toast: Toast) {
        this.toasts.splice(this.toasts.indexOf(toast), 1);
    }

    getToasts() {
        return this.toasts;
    }
}