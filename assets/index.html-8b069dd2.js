import{_ as e,o as n,c as i,e as s}from"./app-4b62f06d.js";const d={},l=s(`<h2 id="_1、前言" tabindex="-1"><a class="header-anchor" href="#_1、前言" aria-hidden="true">#</a> 1、前言</h2><p>本篇文章主要是记录在日常工作中使用 TS 的一些常用方法以及类型定义。</p><h2 id="_2、ts-常用关键字" tabindex="-1"><a class="header-anchor" href="#_2、ts-常用关键字" aria-hidden="true">#</a> 2、TS 常用关键字</h2><p>1.keyof 操作符使用 keyof 用于返回对应类型所有 Key 的联合类型</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface IUser {
  name: string;
  age: number;
  number: number;
}
type UserKeys = keyof IUser; // &quot;name&quot; | &quot;age&quot; | &quot;number&quot; 联合类型

场景：一个函数，接受两个参数，参数一是一个对象，参数二是这个对象中 key，如何用 TypeScript 编写函数。

function getValue&lt;T, K extends keyof T&gt;(obj: T, key: K) {
  return obj[key];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.typeof 操作符使用</p><p>typeof 用于推到类型</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const resultType = {
	name: &#39;zhangsan&#39;,
	age: 11
};
type ResultTypeKeys = typeof resultType
推到类型：
type ResultTypeKeys = {
  name: string;
  age: number;
}
可以同keyof配合使用,如：
type ResultTypeKeys =keyof typeof resultType  // &quot;name&quot; | &quot;age&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.in 映射语法</p><p>可以把 in 理解为 for</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type InExample = &#39;a&#39; | &#39;b&#39; | &#39;c&#39; | &#39;d&#39;;
type Obj = {
  [T in InExample]: string; // 遍历InExample，定义每一个key的类型为string
};
上面Obj等价于;
/*type Obj = {
    a:string,
    b:string,
    c:string,
    d:string
}*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.extends 继承和条件类型</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.继承
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
  name: &#39;xiaoming&#39;,
  sex: 1,
  age: 18
}
2.条件类型
T extends U ? X : Y
条件类型是一种条件表达式进行类型的关系检测，条件类型在理解的时候可以想到类似JavaScript 的三元表达式，T, U, X 和 Y 代表了任意类型, 如果 T 类型可以赋值个类型 U ，返回类型 X 否则返回类型 Y.

type TypeCheck&lt;T&gt; = T extends string ? &#39;string&#39; : nuber

type T0 = TypeCheck&lt;string&gt;; // &quot;string&quot;
type T1 = TypeCheck&lt;&#39;a&#39;&gt;; // &quot;string&quot;

// A的类型为string
type A = Dog extends Animal ? string : number
const a: A = &#39;this is string&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、常见数据转换为类型" tabindex="-1"><a class="header-anchor" href="#_3、常见数据转换为类型" aria-hidden="true">#</a> 3、常见数据转换为类型</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、数组转换为字面量联合类型

  // 只读数组，后续不能进行push, pop, slice等数组操作
  const arr = [&#39;apple&#39;,&#39;banner&#39;,&#39;origen&#39;] as const

  // 把数组转换为字符串字面量联合类型
  type TypeArr = typeof arr[number] // &quot;apple&quot; | &quot;banner&quot; | &quot;origen&quot;

2、对象转换为字面量联合类型使用

  例子1:
  const resultType = {
    name: &#39;zhangsan&#39;,
    age: 11
  };
  type ResultTypeKeys = keyof typeof resultType  // &quot;name&quot; | &quot;age&quot;


  列子2:
  type A = {
    name:string,
    age:number
  }
  type TypeA&lt;T&gt; = {
	  [K in keyof T]:string
  }
  // 使用
  let resultType:TypeA&lt;A&gt; = {
    name:&#39;zhangsan&#39;,
    age:&#39;11&#39;
  }

  例子3:
  type ObjectKeys&lt;T&gt; = T extends object ? keyof T : never;
  type ObjectType = {
    key1: 1;
    key2: 2;
    key3: 4;
  };
  // 使用
  const keyObj:Record&lt;ObjectKeyType,string&gt; = {
    key1: &#39;&#39;
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、常见内置类型" tabindex="-1"><a class="header-anchor" href="#_4、常见内置类型" aria-hidden="true">#</a> 4、常见内置类型</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.Partial&lt;Type&gt; 将Type所有属性都设置为可选

2.Required&lt;Type&gt; 将Type所有属性都设置为必选的

3.Readonly&lt;Type&gt; 将Type所有属性都设置为只读的

4.Record&lt;Keys, Type&gt; 构造一个对象类型，其属性键为Keys，属性值为Type

interface User {
    name: string
    age: number
}
​
type UserName = &#39;xiaoming&#39; | &#39;xiaohong&#39; | &#39;xiaohuang&#39;
​
const users: Record&lt;UserName, User&gt; = {
    xiaoming: { name: &#39;ming&#39;, age: 23 },
    xiaohong: { name: &#39;hong&#39;, age: 24 },
    xiaohuang: { name: &#39;huang&#39;, age: 25 }
}
5.Pick&lt;Type, Keys&gt; 从类型Type中选择一组属性Keys来创建类型

interface User {
  name: string;
  age: number;
  address: string
}

type NameAndAgeOnly = Pick&lt;User, &#39;name&#39; | &#39;age&#39;&gt;;
const nameAndAgeOnly: NameAndAgeOnly = { name: &#39;xiaoming&#39;, age: 26 };

6.Exclude&lt;UnionType, ExcludedMembers&gt; (排除/不包括，一般用于处理联合类型) 从联合类型UnionType中排除ExcludedMembers类型然后返回一个新类型
interface User {
  name: string;
  age: number;
  address: string
}

type UserExcludeAddress = Exclude&lt;keyof User, &#39;address&#39;&gt; // &quot;name&quot; | &quot;age&quot;

// 处理联合类型
type Test1 = &#39;1&#39; | &#39;2&#39; | &#39;3&#39;

const obj: Exclude&lt;Test1, &#39;1&#39; | &#39;2&#39;&gt; = &#39;3&#39;; // 3 OK 赋值1,2就会error

7.Extract (提取/包括，一般用于处理联合类型)
// 处理联合类型
type Test1 = &#39;1&#39; | &#39;2&#39; | &#39;3&#39;

const obj: Extract&lt;Test1, &#39;1&#39; | &#39;2&#39;&gt; = &#39;1&#39;; // 1,2 OK 赋值3就会error

8. Omit&lt;Type, Keys&gt; 与Pick相反，Omit是从Type中选取所有Keys属性然后删除构造一个新类型。
interface User {
  name: string;
  age: number;
  address: string
}

type UserOmitAge = Omit&lt;User, &#39;address&#39;&gt;;

const userOmitAge: UserOmitAge = {  name: &#39;xiaoming&#39;, age: 30 }

9. Parameters&lt;Type&gt; 接受一个函数类型, 将函数的参数处理成一个元组类型。
function createStudent(sno: string, name: string, age: number) {
	return { sno, name, age }
}

type CreateStudentParams = Parameters&lt;typeof createStudent&gt;

const createStuParams: CreateStudentParams = [&#39;112899022&#39;, &#39;ming&#39;, 30]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),a=[l];function v(r,t){return n(),i("div",null,a)}const c=e(d,[["render",v],["__file","index.html.vue"]]);export{c as default};
