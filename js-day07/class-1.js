// 클래스 - ES6에서 지원하게 됨

class Car {
    constructor(name, emoji){ // 생성자는 초기화를 해주는 곳 ! 
        this.name = name; // 전역변수를 선언하지 않아도 자동으로 변수 생성 가능하다.
        this.emoji = emoji;
    }

    display = () => { // arrow function
        console.log(`${this.name}, ${this.emoji}`);
    }
}

// myCar(yourCar)는 Car 클래스의 인스턴이다.
const myCar = new Car("Sonata", "🚗");
const yourCar = new Car("Pride", "🚕");

console.log(myCar);
console.log(yourCar);

const herCar = myCar;
console.log(herCar === myCar);
console.log(myCar === yourCar); // == 값만 비교한다.
console.log(myCar.emoji, myCar.name);
yourCar.display();
herCar.display();

const himCar = {
    name: "싼타페",
    speed: 50,
};