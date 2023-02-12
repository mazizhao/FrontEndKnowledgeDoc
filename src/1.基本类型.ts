// 常见的类型： 基础类型、高级类型 = 自定义类型

// ts 主要的三个特点：
// 1）ts 类型是从安全的角度出发的， 一切从安全角度来考虑
// 2）ts 是在开发的时候来检测 不是在运行的时候，所以代码并没有被真正的执行
// 3）ts 中是具备一个类型推导的特点，不是所有的变量都需要增加类型。 只有无法推断或者推断错误的时候我们才需要编写类型
// ts 最终编译后，类型就消失了

let name: string = 'day';
let age: number = 3;
let male: boolean = true;

// 原始数据类型都要采用小写的类型，大写类型（包装的类型）用来描述的实例

// let s1: string = 'abc';
// let s2: string = new String('abc');

let s3: String = new String('abc');
let s4: String = 'abc';

'abc'.charAt // 默认当我们调用基本类型的方法时，会将当前基本类型包装成对象

// 在ts中，大写类型可以描述实例
class Dog{}
let dog: Dog = new Dog

//包装对象

// 在真正开发的时候，肯定是采用模块化开发

// 数组的类型：[] 数组的概念：数组是多个相同类型的数据集合 js中数据可以随意组合
// ts 中有两种方式可以标注数组类型
let arr1: number[] = [1,2,3];
let arr2: string[] = ['a', 'b', 'c'];
let arr3: (string | number)[] = [1, 'a'];
let arr4: Array<string> = ['a', 'b']; // 采用泛型来声明数组

// ts 中的元组（特点是长度固定、类型固定）
// 元组可以通过数组的方法进行新增，只能新增已经存在的类型，无法取出新增的数据
let tuple: [name: string, age: number, male: boolean] = ['jw', 3, true];
let useName = tuple[0];
tuple.push('xxx');
// let three = tuple[3];

// ts中的枚举，自带类型的对象，枚举的值，如果没有赋值，从0开始递增；反举，只能在我们值为数字的情况
// 代码中的常量 可以全部采用枚举类型，提示友好,使用方便
enum USER_ROLE {
    USER = 'a',
    ADMIN = 10,
    SUPER_ADMIN,
}

// 常量枚举不能反举（一般不用反举，都采用常用常量枚举），不会生成对象，而是直接将值拿出来
const enum USER_ROLE_COPY {
    USER,
    ADMIN,
    SUPER_ADMIN,
}

// null undefined，默认情况下null和undefined只能赋予null和undefined
const n: null = null;
const u: undefined = undefined;
// 如果在非严格null检测的情况下 ， 那么undefined 和 null 是任何类型的子类型

// void 类型，空类型，函数的返回值，可以用void来标识，其他情况下用不到
// undefined 和 void 区别

function fn1() {}
function fn2() {
  return;
}
function fn3(): void | null {
  // undefined 可以赋予给void
  return null;
}

// never 类型 任何类型的子类型，never意味着这个值不可能出现
// - 1) 函数无法到达终点
function whileTrue(): never {
  while (true) {}
}
function throwError(): never {
  throw new Error();
}

// 校验逻辑的完整性 可以利用never特性  实现完整性保护
function validateCheck(v: never) {}
function getResult(strOrBooleanOrNum: string | number | boolean) {
  // 在内部写js逻辑的时候 要对每种类型做处理
  // 如果是字符串 'abc' -> [ a , b ,c]
  // 123 => [1,2,3]
  // true => [t,r,u,e]
  if (typeof strOrBooleanOrNum === "string") {
    return strOrBooleanOrNum.split("");
  } else if (typeof strOrBooleanOrNum === "number") {
    return strOrBooleanOrNum.toString().split("");
  } else if (typeof strOrBooleanOrNum === "boolean") {
    return strOrBooleanOrNum.toString().split("");
  } else {
    validateCheck(strOrBooleanOrNum);
    return [];
  }
  //如果达不到never 则可以正常的运行
  //   let n: never = strOrBooleanOrNum;
}

// Object.create({})
// 大写的 Object 类型 不用 （万物接对象 最终都会找到Object）
// {} 字面量类型 等价于 {} = new Object 一般不会这样使用
function create(target: object) {} // new Proxy()

// symbol 和 bigint 基本不使用

const s1: symbol = Symbol();
const s2: symbol = Symbol();
console.log(s1 === s2); // false

const big: bigint = BigInt(Number.MAX_SAFE_INTEGER + 100); // bigint不能赋予给number

// any 不进行类型检测，一但用户写了any 之后 所有校验都消失了。 如果一个变量声明的时候没有赋值默认也是any

let arr: any = []; // 能不写any 就不写any 写多了 变成anyScript
arr();
arr.xxx;
arr = [];

// 修改tsconfig中target属性为ESNext时代表支持es的所有语法
export {};