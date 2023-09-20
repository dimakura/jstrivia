# jstrivia

## isBlank(value)

```js
isBlank(); // true
isBlank(null); // true
isBlank(""); // true
isBlank(1 / 0); // true
```

## isFunction(value)

```js
isFunction("Tony"); // false
isFunction(function () {}); // true
```

## isNumber(value)

```js
isNumber(); // false
isNumber(null); // false
isNumber(""); // false
isNumber("1"); // false
isNumber(Infinity); // false
isNumber(NaN); // false
isNumber(1); // true
isNumber(1.1); // true
```

## isPresent(value)

Exact opposite of `isBlank`.

## length(value)

```js
length(null); // undefined
length("James"); // 5
length([1, 2, 3]); // 3
```

## merge(...objects)

```js
merge([1, 2, 3], [4, 5, [6, 7]]); // [1, 2, 3, 4, 5, 6, 7]
merge([1, 2], null, undefined); // [1, 2]
```

## parentFolder(path)

```js
parentFolder("/home/tony"); // "/home"
```

## parseFloat(value, defaultValue)

```js
parseFloat(); // null
parseFloat(null); // null
parseFloat(null, 2); // 2
parseFloat(""); // null
parseFloat("1.1"); // 1.1
parseFloat("a", 2); // 2
```

## parseInteger(value, defaultValue)

```js
parseInteger(); // null
parseInteger(null); // null
parseInteger(null, 2); // 2
parseInteger(""); // null
parseInteger("1"); // 1
parseInteger("1.1"); // 1
parseInteger("a", 2); // 2
```

## validateEmail(email)

```js
validateEmail("test@example"); // ["invalid email"]
validateEmail("test@example.com"); // null
```

## validateLength(value, min, max)

```js
validateLength("test", 2, 4); // null
validateLength("test", 2, 3); // ["must be at most 3 characters"]
```

## validatePresence(value)

```js
validatePresence(); // ["must be present"]
validatePresence(null); // ["must be present"]
validatePresence("Jones"); // null
```
