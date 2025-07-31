class Shape {
    constructor(){
        if (new.target === Shape) {
            throw new Error("Cannot instantiate abstract class Shape directly.");
        }
        
    }
    getArea() {
        throw new Error("Abstract method 'getArea()' must be implemented in subclass.");
    }
}

class Rectangle extends Shape {
    constructor(length,width){
        super();
        this.width = width;
        this.length = length;
    }
     getArea(){
        return this.length * this.width;
     }
}

class Circle extends Shape {
    constructor(radius){
        super();
       this.radius = radius;
    }
    getArea(){
        return Math.PI * this.radius * this.radius    
    }
}

let rect = new Rectangle(10,5);
console.log(rect.getArea());

let rad = new Circle(10);
console.log(rad.getArea());

// 50
// 314.1592653589793