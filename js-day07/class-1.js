// 클래스 - ES6에서 지원하게 됨
// react - 양이 늘어나더라도 복잡도는 증가하지 않는

class Car {
    // 생성자 함수에서 초기화가 가능하다.
    // 공통분모 : 전역변수 초기화를 담당한다. - 누가? 생성자 함수가
    constructor(name, emoji){ // 생성자는 초기화를 해주는 곳 ! 
        this.name = name; // 전역변수를 선언하지 않아도 자동으로 변수 생성 가능하다.
        this.emoji = emoji;
    }

    // 사용자 정의 함수를 가질 수 있다. -> 제공되는 함수가 있다. - window, document.write()
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