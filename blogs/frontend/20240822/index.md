---
title: 常见的typescript类型声明，和错误警告的解决方案
date: 2024/08/22
tags:
  - Ts
categories:
  - TypeScript
---

## 1、前言

本篇文章主要是记录在日常工作中使用 TS 的一些常用方法以及类型定义。

## 2、TS 常用关键字

1.keyof 操作符使用
keyof 用于返回对应类型所有 Key 的联合类型

```
interface IUser {
  name: string;
  age: number;
  number: number;
}
type UserKeys = keyof IUser; // "name" | "age" | "number" 联合类型

场景：一个函数，接受两个参数，参数一是一个对象，参数二是这个对象中 key，如何用 TypeScript 编写函数。

function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
```

2.typeof 操作符使用

typeof 用于推到类型

```
const resultType = {
	name: 'zhangsan',
	age: 11
};
type ResultTypeKeys = typeof resultType
推到类型：
type ResultTypeKeys = {
  name: string;
  age: number;
}
可以同keyof配合使用,如：
type ResultTypeKeys =keyof typeof resultType  // "name" | "age"
```

3.in 映射语法

可以把 in 理解为 for

```
type InExample = 'a' | 'b' | 'c' | 'd';
type Obj = {
  [T in InExample]: string; // 遍历InExample，定义每一个key的类型为string
};
上面Obj等价于;
/*type Obj = {
    a:string,
    b:string,
    c:string,
    d:string
}*/
```

4.extends 继承和条件类型

```
1.继承
interface T1 {
  name: string
}

interface T2 {
  sex: number
}

// 多重继承，逗号隔开
interface T3 extends T1,T2 {
  age: number
}

// 合法
const t3: T3 = {
  name: 'xiaoming',
  sex: 1,
  age: 18
}
2.条件类型
T extends U ? X : Y
条件类型是一种条件表达式进行类型的关系检测，条件类型在理解的时候可以想到类似JavaScript 的三元表达式，T, U, X 和 Y 代表了任意类型, 如果 T 类型可以赋值个类型 U ，返回类型 X 否则返回类型 Y.

type TypeCheck<T> = T extends string ? 'string' : nuber

type T0 = TypeCheck<string>; // "string"
type T1 = TypeCheck<'a'>; // "string"

// A的类型为string
type A = Dog extends Animal ? string : number
const a: A = 'this is string'

```

## 3、常见数据转换为类型

```
1、数组转换为字面量联合类型

  // 只读数组，后续不能进行push, pop, slice等数组操作
  const arr = ['apple','banner','origen'] as const

  // 把数组转换为字符串字面量联合类型
  type TypeArr = typeof arr[number] // "apple" | "banner" | "origen"

2、对象转换为字面量联合类型使用

  例子1:
  const resultType = {
    name: 'zhangsan',
    age: 11
  };
  type ResultTypeKeys = keyof typeof resultType  // "name" | "age"


  列子2:
  type A = {
    name:string,
    age:number
  }
  type TypeA<T> = {
	  [K in keyof T]:string
  }
  // 使用
  let resultType:TypeA<A> = {
    name:'zhangsan',
    age:'11'
  }

  例子3:
  type ObjectKeys<T> = T extends object ? keyof T : never;
  type ObjectType = {
    key1: 1;
    key2: 2;
    key3: 4;
  };
  // 使用
  const keyObj:Record<ObjectKeyType,string> = {
    key1: ''
  }
```

## 4、常见内置类型

```
1.Partial<Type> 将Type所有属性都设置为可选

2.Required<Type> 将Type所有属性都设置为必选的

3.Readonly<Type> 将Type所有属性都设置为只读的

4.Record<Keys, Type> 构造一个对象类型，其属性键为Keys，属性值为Type

interface User {
    name: string
    age: number
}
​
type UserName = 'xiaoming' | 'xiaohong' | 'xiaohuang'
​
const users: Record<UserName, User> = {
    xiaoming: { name: 'ming', age: 23 },
    xiaohong: { name: 'hong', age: 24 },
    xiaohuang: { name: 'huang', age: 25 }
}
5.Pick<Type, Keys> 从类型Type中选择一组属性Keys来创建类型

interface User {
  name: string;
  age: number;
  address: string
}

type NameAndAgeOnly = Pick<User, 'name' | 'age'>;
const nameAndAgeOnly: NameAndAgeOnly = { name: 'xiaoming', age: 26 };

6.Exclude<UnionType, ExcludedMembers> (排除/不包括，一般用于处理联合类型) 从联合类型UnionType中排除ExcludedMembers类型然后返回一个新类型
interface User {
  name: string;
  age: number;
  address: string
}

type UserExcludeAddress = Exclude<keyof User, 'address'> // "name" | "age"

// 处理联合类型
type Test1 = '1' | '2' | '3'

const obj: Exclude<Test1, '1' | '2'> = '3'; // 3 OK 赋值1,2就会error

7.Extract (提取/包括，一般用于处理联合类型)
// 处理联合类型
type Test1 = '1' | '2' | '3'

const obj: Extract<Test1, '1' | '2'> = '1'; // 1,2 OK 赋值3就会error

8. Omit<Type, Keys> 与Pick相反，Omit是从Type中选取所有Keys属性然后删除构造一个新类型。
interface User {
  name: string;
  age: number;
  address: string
}

type UserOmitAge = Omit<User, 'address'>;

const userOmitAge: UserOmitAge = {  name: 'xiaoming', age: 30 }

9. Parameters<Type> 接受一个函数类型, 将函数的参数处理成一个元组类型。
function createStudent(sno: string, name: string, age: number) {
	return { sno, name, age }
}

type CreateStudentParams = Parameters<typeof createStudent>

const createStuParams: CreateStudentParams = ['112899022', 'ming', 30]
```
