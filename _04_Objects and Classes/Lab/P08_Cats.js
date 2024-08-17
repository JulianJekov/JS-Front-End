function catClass(input) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];

    for (const line of input) {
        let [name, age] = line.split(' ');
        cats.push(new Cat(name, age));
    }

    cats.forEach(cat => cat.meow());

}
catClass(['Mellow 2', 'Tom 5']);
