class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    isMale(gender) {
        if (this.gender === true) {
            return 'male';
        }
        return 'female';
    }
    setGender(gender) {
        this.gender = gender;
    }
    checkApple() {
        if (this.weight > 0) {
            return true;
        }
    }
    eat(apple) {
        if(!apple.isEmpty()){
            apple.this.weight--;
            document.write(apple.getWeight());
            this.weight++;
        }else{
            location.reload();
            alert('Đã hết táo');
        }

    }
    say() {

    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getWeight() {
        return this.weight;

    }
    setWeight(weight) {
        this.weight = weight;
    }

}
class Apple {
    constructor(weight) {
        this.weight = 10;
    }
    decrease() {
        if (this.weight > 0 && this.weight <= 10) {
            this.weight--;
        }
    }
    isEmpty() {
        if(this.weight > 0){
            return true;
        }else{
            return false;
        }

    }
    getWeight() {
        return this.weight;
    }
}
let adam = new Human('adam', 'male', 75);
let eva = new Human('Eva','female',45);
adam.eat(apple);
eva.eat(apple);
document.write(adam.name);
document.write(eva.name);
let apple = new Apple(11);
