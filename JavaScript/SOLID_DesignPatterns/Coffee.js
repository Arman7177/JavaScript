var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SimpleCoffee = /** @class */ (function () {
    function SimpleCoffee() {
    }
    SimpleCoffee.prototype.cost = function () {
        return 5;
    };
    ;
    SimpleCoffee.prototype.description = function () {
        return "Simple Coffe ";
    };
    ;
    return SimpleCoffee;
}());
var CoffeeDecorator = /** @class */ (function () {
    function CoffeeDecorator(coffee) {
        this.coffee = coffee;
    }
    return CoffeeDecorator;
}());
var WithMilk = /** @class */ (function (_super) {
    __extends(WithMilk, _super);
    function WithMilk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WithMilk.prototype.cost = function () {
        return this.coffee.cost() + 1.5;
    };
    WithMilk.prototype.description = function () {
        return this.coffee.description() + "with a Milk ";
    };
    return WithMilk;
}(CoffeeDecorator));
var WithSugar = /** @class */ (function (_super) {
    __extends(WithSugar, _super);
    function WithSugar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WithSugar.prototype.cost = function () {
        return this.coffee.cost() + 0.5;
    };
    WithSugar.prototype.description = function () {
        return this.coffee.description() + "with a Sugar ";
    };
    return WithSugar;
}(CoffeeDecorator));
var WithWhippedCream = /** @class */ (function (_super) {
    __extends(WithWhippedCream, _super);
    function WithWhippedCream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WithWhippedCream.prototype.cost = function () {
        return this.coffee.cost() + 2.5;
    };
    WithWhippedCream.prototype.description = function () {
        return this.coffee.description() + "with a WithWhippedCream ";
    };
    return WithWhippedCream;
}(CoffeeDecorator));
var coffeeMaker = new WithMilk(new WithWhippedCream(new SimpleCoffee()));
console.log(coffeeMaker.description());
