class Laptop {
    constructor(info, quality) {
        this.info = {
            producer: info.producer,
            age: info.age,
            brand: info.brand,
        }
        this.quality = Number(quality);
    }
    isOn = false;

    turnOn() {
        this.isOn = true;
        this.quality--;
    }

    turnOff() {
        this.isOn = false;
        this.quality--;
    }

    showInfo() {
        return JSON.stringify(this.info);
    }

    get price() {
        return (800 - (this.info.age * 2) + (this.quality * 0.5));
    }
}

let info = {producer: "Lenovo", age: 1, brand: "Legion"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
laptop.turnOn()
laptop.turnOff()
console.log(laptop.isOn)
