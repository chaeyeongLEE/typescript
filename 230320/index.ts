let 이름 : string|number = 'LEE';

//튜플
let b:[string, number];
b=['z',1];

//void, never
function sayHello():void {
    console.log('hello');
} //반환값이 없기때문에 void 작성

function showError():never{
    throw new Error();
}//never는 에러를 반환하거나 영원히 끝나지않는 함수를 쓸 때 사용

function infLoop():never {
    while(true){
        //do something..
    }    
}

//enum
enum Os{
    Window=3,
    Ios=10,
    Android
}

console.log(Os[10]);
let myOs:Os;
myOs=Os.Window
// 특정값만 입력하도록 하고싶을때, 그 값들이 공통점이 있을 때 사용

//null, undefined
let a:null=null;
let c:undefined = undefined;

// 인터페이스명은 대문자로 짓는다
interface Human {
    name: string; // name 키는 문자열 타입
    age: number; // age 키는 넘버 타입
    boo(): void; // boo 함수는 void 타입
  }
  
  // 인터페이스 자체를 타입으로 줘서 객체 생성
  const person: Human = {
    name: "da",
    age: 5,
    boo: () => console.log("this is boo"),
  };
  
  // 매개변수에서 인터페이스를 타입으로 받는다.
  function booboo(a: Human): void {
    console.log(`${a.name} is ${a.age} years old`);
  };
  
  booboo(person); // da is 5 years old
  person.boo(); // this is boo