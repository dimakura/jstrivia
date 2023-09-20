# jstrivia

## delayInSeconds(seconds)

```js
await delayInSeconds(1); // wait 1 second
```

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
parentFolder("C:\\Users\\tony"); // "C:\\Users"
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

## presence(value, defaultValue)

```js
presence(0, 1); // 0
presence(null, 1); // 1
```

## retry(fn, options)

```js
// given a risky function
const riskyFunction = () => { ... };

// we can produce a new function which automatically
// retries the risky function on failure

// retry 5 times with 1, 2, 4, 8, 16 seconds delay
const riskyWithRetry = retry(riskyFunction);

// retry 3 times with 1 second delay
// (the leading 0 is required, and can be used for initial delay)
const riskyWithRetry = retry(
  riskyFunction, {
    backoffs: [0, 1, 1, 1]
  }
);

// retry only on a specific error
const riskyWithRetry = retry(
  riskyFunction, {
    canRetry: (error, attempt) => error instanceof LimitExceededException
  }
);
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
