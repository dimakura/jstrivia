# jstrivia

## isEmpty(value)

```js
isEmpty(); // true
isEmpty(null); // true
isEmpty(""); // true
isEmpty(1 / 0); // true
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

Exact opposite of `isEmpty`.

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
