interface Coffee {
    cost(): number;
    description(): string;
}
class SimpleCoffee implements Coffee {
    cost(): number{
         return 5;
    };
    description(): string{
        return "Simple Coffe "
    };
}
abstract class CoffeeDecorator implements Coffee {
    protected coffee: Coffee;
    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }
    abstract cost(): number;
    abstract description(): string;
}

class WithMilk extends CoffeeDecorator {
    cost(): number {
        return this.coffee.cost() + 1.5;
    }
    description(): string {
        return this.coffee.description() + "with a Milk ";
    }
}
class WithSugar extends CoffeeDecorator {
    cost(): number {
        return this.coffee.cost() + 0.5;
    }
    description(): string {
        return this.coffee.description() + "with a Sugar ";
    }
}
class WithWhippedCream extends CoffeeDecorator {
    cost(): number {
        return this.coffee.cost() + 2.5;
    }
    description(): string {
        return this.coffee.description() + "with a WithWhippedCream ";
    }
}

let coffeeMaker = new WithMilk(new WithWhippedCream(new SimpleCoffee()))

console.log(coffeeMaker.description());
