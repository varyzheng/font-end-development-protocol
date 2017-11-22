# JavaScript规范
## 类型
* 原始值: 相当于传值(JavaScript对象都提供了字面量)，使用字面量创建对象。  
  * `string`
  * `number`
  * `boolean`
  * `null`
  * `undefined`
```js
var foo = 1,
    bar = foo;

bar = 9;

console.log(foo, bar); // => 1, 9
```
* 复杂类型: 相当于传引用
  * `object`
  * `array`
  * `function`
```js
var foo = [1, 2],
    bar = foo;

bar[0] = 9;

console.log(foo[0], bar[0]); // => 9, 9
```
## 对象
* 使用字面值创建对象 
```js
// bad
var item = new Object();

// good
var item = {};
```
* 不要使用保留字 reserved words 作为键
```js
// bad
var superman = {
  class: 'superhero',
  default: { clark: 'kent' },
  private: true
};

// good
var superman = {
  klass: 'superhero',
  defaults: { clark: 'kent' },
  hidden: true
};
```
## 数组
* 使用字面值创建数组  
```js
// bad
var items = new Array();

// good
var items = [];
```
* 如果你不知道数组的长度，使用push
```js
var someStack = [];
// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');
```
* 你需要拷贝数组时使用slice
```js
var len = items.length,
    itemsCopy = [],
    i;

// bad
for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// good
itemsCopy = items.slice();
```
* 使用slice将类数组的对象转成数组.
```js
function trigger() {
  var args = [].slice.apply(arguments);
  ...
}
```
## 字符串
* 对字符串使用单引号 ''(因为大多时候我们的字符串，特别html会出现")
```js
// bad
var name = "Bob Parr";

// good
var name = 'Bob Parr';

// bad
var fullName = "Bob " + this.lastName;

// good
var fullName = 'Bob ' + this.lastName;
```
* 超过80(也有规定140的，项目具体可制定)个字符的字符串应该使用字符串连接换行
* 注: 如果过度使用，长字符串连接可能会对性能有影响
```js
// bad
var errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

// bad
var errorMessage = 'This is a super long error that \
was thrown because of Batman. \
When you stop to think about \
how Batman had anything to do \
with this, you would get nowhere \
fast.';


// good
var errorMessage = 'This is a super long error that ' +
  'was thrown because of Batman.' +
  'When you stop to think about ' +
  'how Batman had anything to do ' +
  'with this, you would get nowhere ' +
  'fast.';
```
* 编程时使用join而不是字符串连接来构建字符串，特别是IE
```js
var items,
    messages,
    length, i;

messages = [{
    state: 'success',
    message: 'This one worked.'
},{
    state: 'success',
    message: 'This one worked as well.'
},{
    state: 'error',
    message: 'This one did not work.'
}];

length = messages.length;

// bad
function inbox(messages) {
  items = '<ul>';

  for (i = 0; i < length; i++) {
    items += '<li>' + messages[i].message + '</li>';
  }

  return items + '</ul>';
}

// good
function inbox(messages) {
  items = [];

  for (i = 0; i < length; i++) {
    items[i] = messages[i].message;
  }

  return '<ul><li>' + items.join('</li><li>') + '</li></ul>';
}
```
## 属性
* 当使用变量和特殊非法变量名时，访问属性时可以使用中括号(. 优先)
```js
var luke = {
  jedi: true,
  age: 28
};

function getProp(prop) {
  return luke[prop];
}

var isJedi = getProp('jedi');
```
## 变量
* 总是使用 var 来声明变量，如果不这么做将导致产生全局变量，我们要避免污染全局命名空间。
  ### *注 ：在已知自己的js代码会被编译为ES5的情况下，应该用const和let代替var，贸然使用ES6语法可能会造成浏览器无法解析。*
```js
// bad
superPower = new SuperPower();

// good
var superPower = new SuperPower();
```
* 使用一个 var 以及新行声明多个变量，缩进4个空格。
```js
// bad
var items = getItems();
var goSportsTeam = true;
var dragonball = 'z';

// good
var items = getItems(),
    goSportsTeam = true,
    dragonball = 'z';
```
* 在作用域顶部声明变量，避免变量声明和赋值引起的相关问题。
```js
// bad
function() {
  test();
  console.log('doing stuff..');

  //..other stuff..

  var name = getName();

  if (name === 'test') {
    return false;
  }

  return name;
}

// good
function() {
  var name = getName();

  test();
  console.log('doing stuff..');

  //..other stuff..

  if (name === 'test') {
    return false;
  }

  return name;
}

// bad
function() {
  var name = getName();

  if (!arguments.length) {
    return false;
  }

  return true;
}

// good
function() {
  if (!arguments.length) {
    return false;
  }

  var name = getName();

  return true;
}
```
## 条件表达式和等号
* 合理使用 === 和 !== 以及 == 和 !=.
* 合理使用表达式逻辑操作运算.
* 条件表达式的强制类型转换遵循以下规则：

  * **对象** 被计算为 **true**
  * **Undefined** 被计算为 **false**
  * **Null** 被计算为 **false**
  * **布尔值** 被计算为 **布尔的值**
  * **数字** 如果是 **+0**, **-0**, or **NaN** 被计算为 **false** , 否则为 **true**
  * **字符串** 如果是空字符串 '' 则被计算为 **false**, 否则为 **true**
```js
if ([0]) {
  // true
  // An array is an object, objects evaluate to true
}
```
* 使用快捷方式
```js
// bad
if (name !== '') {
  // ...stuff...
}

// good
if (name) {
  // ...stuff...
}

// bad
if (collection.length > 0) {
  // ...stuff...
}

// good
if (collection.length) {
  // ...stuff...
}
```