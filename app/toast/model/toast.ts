export class Toast {
    public message: string;
    public level: string;
    public lifetime: number;
    public dismisable: boolean;
    
    constructor(message: string, level: string, lifetime: number, dismisable: boolean) {
        this.message = message;
        this.level = level;
        this.lifetime = lifetime;
        this.dismisable = dismisable;
    }
    
}
