---
date: 2023-06-30
title: Basic JS - Var, Let, Const 차이 잘 아시나요?
tags:
  - javascript
  - morden
---

# Basic JS - Var, Let, Const 차이 잘 아시나요?

## TL;DR

전체 요약

## D1. 변수 선언 방식

### Var

```javascript
var variable = 'GARDEN SEVEN 7';
console.log(`first print ${variable}`);

var variable = '7 SEVEN GARDEN';
console.log(`second print ${variable}`);

// : runtime result :
// first print GARDEN SEVEN 7
// second print 7 SEVEN GARDEN
```

- Var로 선언한 변수는 재 선언이 가능하고 값도 변경이 가능합니다.
- ES2015(ES6) 이전에는 변수가 var로만 선언이 가능했기 때문에 아래 문제점들이 있었습니다.
	- 상수 사용이 불가능합니다.
	- 개발자가 착각하고 같은 이름의 변수로 선언 시 위에 선언한 변수의 값이 사라집니다.
- 이러한 문제를 해결하기위해 ES2015(ES6)부터 Let, Const가 새롭게 등장했습니다.

### Let

```javascript
let variable = 'GARDEN SEVEN 7';
console.log(`first print ${variable}`);

let variable = '7 SEVEN GARDEN';
console.log(`second print ${variable}`);

variable = '7 SEVEN GARDEN'
console.log(`third print ${variable}`);

// : runtime result :
// first print GARDEN SEVEN 7
// Uncaught SyntaxError: Identifier 'variable' has already been declared
// third print 7 SEVEN GARDEN
```

- Let으로 선언한 변수는 재 선언이 불가능합니다. 
- 다만, 선언된 변수의 값을 변경할 수 있습니다.

### Const

```javascript
const variable = 'GARDEN SEVEN 7';
console.log(`first print ${variable}`);

const variable = '7 SEVEN GARDEN';
console.log(`second print ${variable}`);

variable = '7 SEVEN GARDEN'
console.log(`third print ${variable}`);

// : runtime result :
// first print GARDEN SEVEN 7
// Uncaught SyntaxError: Identifier 'variable' has already been declared
// Uncaught TypeError: Assignment to constant variable.
```

- Const로 선언한 변수는 재 선언 / 변경 모두 불가능합니다.
- 다만, 완전이 변경이 불가능 한것은 아니다.
	- 객체 안에 있는 요소들을 변경하는 것은 가능합니다.

|    |      var      |  let |const |
|----------|:-------------|:------|:------|
| 재 선언 |   ✅ |⛔️  | ⛔️|
| 값 변경 |   ✅ |  ✅  |⛔️|



## D2. 스코프 영역

### 스코프란?
- 변수에 접근할 수 있는 범위

### 스코프 레벨

```javascript
// 여기가 전역 스코프 레벨입니다.
const globalVariable = 'global';

function method() {
	// 여기가 함수 스코프 레벨입니다.
	const functionVariable = 'function';
	
	if(expression){
		// 여기가 블록 스코프 레벨입니다.
		const expressionVariable = 'block'
	}
}
```

- 전역 스코프
	- 모든 곳에서 사용 가능한 레벨의 스코프
- 함수 스코프
	- 함수 내부에서 사용 가능한 레벨의 스코프
- 블록 스코프
	- 함수,반복문,조건문 같이 `{}` 으로 감싸고 있는 곳
	- 함수 스코프도 블록 스코프의 일부이다

### Var 

```javascript
var globalVariable = 'global';

function method(){
	var functionVariable = 'function';

	if(functionVariable === 'function'){
		var blockVariable = 'block';
	}

	console.log(globalVariable, functionVariable, blockVariable)
}

// : runtime result :
// global function block
```

- Var로 선언한 변수는 전역 스코프 or 함수 스코프 레벨을 가질 수 있습니다.
- 함수 내부에서 선언한 변수는 함수 안에서만 사용 가능합니다.
	- 함수 내부의 for문 안에서 선언한 변수가 for문 블록 스코프 밖에서도 참조 가능합니다.
	- 위 상황이 문제가 되는 경우는 함수 안에 존재하는 이름으로 for문에서 변수를 선언할 경우 기존 변수가 사라집니다.
- 함수 외부에서 선언한 변수는 모두 전역 스코프 레벨을 가집니다.

### Let & Const 

```javascript
let globalVariable = 'global';

function method(){
	let functionVariable = 'function';

	if(functionVariable === 'function'){
		let blockVariable = 'block';
	}

	console.log(globalVariable, functionVariable, blockVariable)
}

// : runtime result :
// ReferenceError: blockVariable is not defined
```

- Let과 const는 같은 스코프 레벨을 가집니다.
- 두 변수 모두 전역 스코프 or 블록 스코프를 가질 수 있습니다.
- 블록 안에서 선언한 변수는 블록 안에서만 사용 가능합니다.
	- var와 다르게 for문에서 선언한 변수는 for문 안에서만 사용 가능합니다.

## D3. 호이스팅 처리 방식

### 시작하기 앞서

#### 실행 컨텍스트

- 호이스팅을 이해라면 실행 컨텍스트를 알아야합니다. 
- 다만 이번에는 다루지 않고 실행 컨텍스트의 자세한 내용은 별도로 포스팅 하겠습니다.

#### 변수 선언 3단계
- 변수 선언 시 동작하는 방식에 대한 이해가 필요합니다.

1. **선언**
	- 실행 컨텍스트의 변수 객체에 등록
2. **초기화**
	- 메모리 공간 확보
	- 등록한 변수의 값을 undefined로 설정
3. **할당**
	- undefined를 실제 값으로 변경

  

### 호이스팅 이란?
- 쉽게 말하면 자바스크립트 실행 전 변수가 선언 및 초기화 되는 현상을 말합니다.
- var와 let,const는 호이스팅되는 현상이 다르게 나옵니다. 


#### var

```javascript
console.log(a);
var a = 10

// : runtime result :
// undefined
```

- var로 선언된 변수는 실행 전 미리 선언과 초기화가 됩니다.
- 이때 초기화는 undefined
- 이같은 현상으로 위에 코드의 결과 값이 undefined라는 값이 나옵니다.

#### Let, const
  
```javascript
console.log(a);
const a = 10

// : runtime result :
// Uncaught ReferenceError ReferenceError: Cannot access 'a' before initialization
```
  
- Let과 const로 선언된 변수는 실행 전 **선언만** 진행합니다
- 초기화를 하지 않기 때문에 위에 코드에서 ReferenceError가 발생합니다.
- let과 const는 호이스팅 단계에서 선언만 처리되고 초기화 및 할당은 실제 선언된 라인에서 처리됩니다.


---

<p style="text-align: right">읽어주셔서 감사합니다</p>
<p style="text-align: right">김지민이 썼음</p>
