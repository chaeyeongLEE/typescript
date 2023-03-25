// 변수
// 키워드 변수이름:타입 = 값;
// 타입표기(type annotation)
const str : string = "string";
const num : number = 1;
const bool: boolean = true;

// object
const arr1 : number[] = [1,2,3]
const arr2 : string[] = ['a','w','e'];
const arr3 : Array<number> = [1,2,3];
console.log(arr2[0].concat('!'));


// tuple
const arr4 : [boolean, string] = [true, 'a'];

//enum(특정값을 열거)
enum Names {sesac, 새싹} 
let name1:Names = Names.sesac;
//name1 = 'sesac'

// any : 최대한 안쓰는게 좋다.(js를 ts로 바꿀 때 주로 사용함)
// 모든 타입에 대해서 허용한다.
const any1 : any = [1,2,3]

// void : undefined와 null만 들어갈 수 있는 타입(리턴없을때)
const var1 : void = undefined;

// never
function neverEnd():never {
    while(true){

    }    
}

////////함수
// (매개변수: type) : <return>
//function 함수이름(매개변수:type) : 반환타입{}
function sum1(a:number=1, b?:number): number {
    if(b==undefined) return a;
    else return a+b;//num+num // num+undefined
}


// ?는 인자를 받을 수도 안받을 수도 있다는 뜻
console.log(sum1(1,2));
//console.log(sum1('1',2)); // 넘버니까 안됨
//console.log((1,2,3));// 2개만 보냈으니 안됨


function sum2(a:number, b?:number): void {
    console.log(a)
    console.log(b)
    
}
// ?는 인자를 받을 수도 안받을 수도 있다는 뜻

sum1(1)
sum1(1,2)

console.log(sum1(1,2));
//console.log(sum1('1',2)); // 넘버니까 안됨
//console.log((1,2,3));// 2개만 보냈으니 안됨

// interface
interface Student {
    name:string,
    age:number,
    nickname? : string //닉네임은 필수가 아니다
}

const Student1 : Student = {
    name: '이름1',
    age : 10
}

const Student2 : Student = {
    name: '이름2',
    age : 20,
    nickname:'닉네임2'
}

function check(stu:Student) {
    console.log(stu.name);
}

check(Student1);
check(Student2);

////////////Class
// clss 클래스이름{
//     변수명: 타입;
//     constructor(변수:타입){
//         this.변수명 = 변수
//     }
// }
class Person{
    id:string;
    constructor(name:string, age:number){
        this.id = name+age;
    }
}

const person1 = new Person('이름3:',30);
console.log(person1.id);

interface Shape{
    width : number;
    getLength() : number;
}

class Square implements Shape{
    //height : number;
    constructor(readonly width:number){} // {thus.id=id}라는 말을 생략

    getLength(): number{
        return this.width;
    }
}
const Square1 =new Square(10);
console.log(Square1.getLength());

class person2 {
    constructor(public name: string, private age:number){
        this.name=name;
        this.age= age;
    }
}
const person3 = new person2('a',1);
console.log(person3.name);
//console.log(person3.age);

// 제네릭(Generic) <T> 여러가지 타입에서 동작하도록
function getText<T>(text:T):T {
    return text;
}
console.log(getText<string>('a')); //매개변수를 string, 리턴도 string 으로 받겠다.
console.log(getText<number>(1));

