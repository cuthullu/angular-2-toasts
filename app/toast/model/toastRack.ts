export class ToastRack {
    public position: string = "top-left"
    public positions = ["top-left","top-middle", "top-right", "bottom-left", "bottom-middle", "bottom-right"];
    
    public setPosition(position:string) {
        this.position = position !== undefined && this.positions.indexOf(position) >= 0? position: this.position;
    }
    
    public getPosition(){
        return this.position;
    }
}