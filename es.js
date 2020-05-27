
class Father {
    constructor (x,y) {
        this.x= x;
        this.y = y;
    }
}

class Son extends Father {
    constructor (x, y, color) {
        // this.color =color ;//ReferenceError : this is not defined
        super(x,y);
        this.color = color;//正确
    }
}

let s = new Son(25,8,"green");
s instanceof Son //true
s instanceof Father //true