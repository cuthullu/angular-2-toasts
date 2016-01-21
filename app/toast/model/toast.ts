export class Toast {
    private LIFETIME_DEFULT = 5000;
    private LEVEL_DEFAULT = "info";
    private DISMISABLE_DEFAULT = false;
    private POSITION_DEFAULT = "top-right";
    
    public message: string;
    public level: string;
    public lifetime: number;
    public dismisable: boolean;
    public position: string;
    
    
    constructor(message: string, level?: string, lifetime?: number, dismisable?: boolean, position?: string) {
        this.message = message;
        
        this.level = level === undefined ? this.LEVEL_DEFAULT : level;
        this.lifetime = lifetime === undefined ? this.LIFETIME_DEFULT : lifetime;
        this.dismisable = dismisable === undefined ? this.DISMISABLE_DEFAULT : dismisable;
        this.position = position === undefined ? this.POSITION_DEFAULT : position;
    }
    
    success()  {
        this.level = "success"
        return this;
    }
    info()  {
        this.level = "info"
        return this;
    }
    warning()  {
        this.level = "warning"
        return this;
    }
    danger()  {
        this.level = "danger"
        return this;
    }
    
    // topLeft() {
    //     this.position = "top-left"
    //     return this;
    // }
    // topMiddle() {
    //     this.position = "top-middle"
    //     return this;
    // }
    // topRight() {
    //     this.position = "top-right"
    //     return this;
    // }
    // bottomLeft() {
    //     this.position = "bottom-left"
    //     return this;
    // }
    // bottomMiddle() {
    //     this.position = "bottom-middle"
    //     return this;
    // }
    // bottomRight() {
    //     this.position = "bottom-right"
    //     return this;
    // }
}