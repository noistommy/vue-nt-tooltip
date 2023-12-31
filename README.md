vue-nt-tooltip
==============

![Static Badge](https://img.shields.io/badge/vue_3-only-%234FC08D?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/javascript-%23F7DF1E?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/html-%23E34F26?style=for-the-badge&logo=html)
![Static Badge](https://img.shields.io/badge/sass-%23CC6699?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/vite-bundler-%23646CFF?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/icon-font_awesome_4.7.0-%23528DD7?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/vue_directive-user_custom_with_vue_3-%234FC08D?style=for-the-badge)


  `vue-nt-tooltip` is a user-defined directive for vue. Tooltips created using `v-directive` can be represented as the element's directive properties when creating a vue template, allowing you to intuitively see the element to which the tooltip is applied. It can be displayed by passing only simple text, and you can use html to make more complex expressions. Depending on the position of the element to be displayed, the display position can be specified as `top`, `bottom`.

  `vue-nt-tooltip`은 vue의 사용자 정의 지시문(directive)이다. directive를 이용하여 제작된 툴팁은 vue template 작성 시 엘리먼트의 디렉티브 속성으로 표현 가능하여 톨팁이 적용된 엘리먼트를 직관적으로 확인 가능하다. 간단한 텍스트만 전달하여 표시 가능하며 좀 더 복잡한 표현을 하기위해 html을 사용 가능하다. 표시될 엘리먼트의 위치에 따라 표시 위치를 `top`, `bottom`으로 지정할수있다.

---
## Demo

[vue-nt-tooltip](https://noistommy.github.io/vue-nt-tooltip) demo page.

---
## Installation

```sh
$ npm install vue-nt-tooltip --save
```
---

## Usage

### Directive registration

```javascript
import { createApp } from "vue";
// Import module
import NtTooltip from "vue-nt-tooltip";

// import  style css or use yours
import “vue-nt-tooltip/tooltip.css”;
 
const app = createApp(...); // ...: Root Element Id

const defaultOptions = {
  // you can set your init options here
};

app.use(NtTooltip, defaultOptions)
```
### use tooltip directive in template

```html

<!-- basic --> 
<div v-nt-tooltip="`tooltip sample`"> ... </div>

<!-- object type contents -->
<div v-nt-tooltip="{ contents: 'tooltip sample'}"> ... </div>

<!-- html contents --> 
<div v-nt-tooltip="{ contents: '<span> html contents </span>'}"> ... </div>

<!-- position -->
<div v-nt-tooltip:top="{ contents: 'create up'}"> ... </div>
<div v-nt-tooltip:bottom="{ contents: 'create down'}"> ... </div>

```
---
## Properties

* **maxWidth**: _number_ ▶︎ `200`   
Setting the max width size(px) of tooltip

* **direction**: _string_ ▶︎ `top`   
Setting the initial position of tooltip

* **alignment**: _string_ ▶︎ `center`   
Setting the initial position of tooltip arrow
