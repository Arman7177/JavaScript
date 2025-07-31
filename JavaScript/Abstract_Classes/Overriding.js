class Animal {
    constructor(){
        if(new.target === Animal) {
            throw new Error("Cannot instantiate abstract class Animal directly.");
        }
    }
    speak(){
        console.log('Animal make a sonud');
    }
}

class Dog extends Animal {
    speak(){
        super.speak();
        console.log("Dog barks");  
    }
}

const d = new Dog();
d.speak()

//Animal make a sonud
//Dog barks