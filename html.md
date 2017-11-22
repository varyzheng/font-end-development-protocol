# html规范  
## 语法  

* 使用两个空格的 soft tabs — 这是保证代码在各种环境下显示一致的唯一方式。  
* 嵌套的节点应该缩进（两个空格）。  
* 在属性上，使用双引号，不要使用单引号。  
* 不好在自动闭合标签结尾处使用斜线 - HTML5 规范 指出他们是可选的。  
* 不要忽略可选的关闭标签（例如`</li>` 和`<body>`）。
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page title</title>
  </head>
  <body>
    <img src="images/company-logo.png" alt="Company">
    <h1 class="hello-world">Hello, world!</h1>
  </body>
</html>
```
***
## 声明
* HTML5 doctype：在每个 HTML 页面开头使用这个简单地 `<!DOCTYPE html>` 来启用标准模式，使其每个浏览器中尽可能一致的展现。  
* Language属性：鼓励在html元素上指定lang属性来指出页面语言。  
* 字符编码：通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式(通常是 UTF-8）。  
* IE 兼容模式：Internet Explorer 支持使用兼容性 `<meta>` 标签来指定使用什么版本的 IE 来渲染页面。如果不是特殊需要，通常通过 edge mode 来通知 IE 使用最新的兼容模式。  
```html
<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  </head>
</html>
```
***
## 引入 CSS 和 JavaScript
根据 HTML5 规范, 通常在引入 CSS 和 JavaScript 时不需要指明 `type`，因为 `text/css` 和 `text/javascript` 分别是他们的默认值
```html
<!-- 错误示范 -->
<link rel="stylesheet" href="code-guide.css" type="text/css">
<style type="text/css"></style>
<script src="code-guide.js" type="text/javascript"></script>

<!-- 正确示范 -->
<link rel="stylesheet" href="code-guide.css">
<style></style>
<script src="code-guide.js"></script>
```  
***
## 属性顺序
* `class`
* `id`, `name`
* `data-*`
* `src`, `for`, `type`, `href`, `value`
* `title`, `alt`
* `role`, `aria-*`  

class 用于标识高度可复用组件，因此应该排在首位。id 用于标识具体组件，应当谨慎使用（例如，页面内的书签），因此排在第二位。  
```html
<a class="..." id="..." data-toggle="modal" href="#">
  Example link
</a>

<input class="form-control" type="text">

<img src="..." alt="...">
```
***
## Boolean属性  
布尔型属性可以在声明时不赋值。XHTML 规范要求为其赋值，但是 HTML5 规范不需要。  
```html
<input type="text" disabled>

<input type="checkbox" value="1" checked>

<select>
  <option value="1" selected>1</option>
</select>
```
***
## 性能
* 减少标签数量：在编写 HTML 代码时，需要尽量避免多余的父节点。很多时候，需要通过迭代和重构来使 HTML 变得更少。
```html
<!-- Not so great -->
<span class="avatar">
  <img src="...">
</span>

<!-- Better -->
<img class="avatar" src="...">
```
* JavaScript 生成标签：在 JavaScript 文件中生成标签让内容变得更难查找，更难编辑，性能更差。应该尽量避免这种情况的出现。  
***
## 其他注意事项
* 双核浏览器使用webkit内核
* 页面tkd信息
* author信息
* 为移动设备添加viewport  
```html
<!DOCTYPE html>
<html lang="zh-cn>">
  <head>
    <title>页面标题<title>
    <meta name="description" content="网页描述">
    <meta name="keywords" content="关键字，以逗号分隔">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="renderer" content="webkit">
    <meta name="author" content="vary, varyzheng@outlook.com">
    <meta name="viewport" content="width=device-width initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  </head>
</html>
```
* css引入一般放在head标签里面</li>
* JavaScript引入放在底部  
### 嵌套
#### 语义嵌套约束：
* `<li>`用于`<ul>`或`<ol>`下;
* `<dd>`, `<dt>`用于`<dl>`下;
* `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<td>`用于`<table>`下
#### 严格嵌套约束：
* inline-Level 元素，仅可以包含文本或其它 inline-Level 元素;
* `<a>`里不可以嵌套交互式元素`<a>`、`<button>`、`<select>`等;
* `<p>`里不可以嵌套块级元素`<div>`、`<h1>~<h6>`、`<p>`、`<ul><ol><li>`、`<dl>/<dt>/<dd>`、`<form>`等。

### web语义化
通常情况下，每个标签都是有语义的，此外语义化的 HTML 结构，有助于机器（搜索引擎）理解，另一方面多人协作时，能迅速了解开发者意图。  
常见的语义化标签：`article` `aside` `details` `figcaption` `figure` `footer` `header` `main` `mark` `nav` `section` `summary` `time`
