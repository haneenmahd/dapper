<img src="https://github.com/TruelinesHQ/dapper/blob/main/resources/banner.png" alt="Banner" />

<br />

**Dapper** is a blazing fast and lightweight framework for managing state in a Javascript app.

## Features

- 💨 **Fast** − Our APIs just run lightning fast, no more slowdowns.
- 🔋 **Efficient** - To reduce the consumption of energy, we have optimised it.
- ⛑ **Type Safe** - To prevent type errors and bugs, we have made the framework type-safe.
- 🛳 **Portable** - This framework works accorss web and Node environments. You can use this library together with React or any other Javascript UI libraries.
- 😵 **Tiny (>2kb)** - Too much lightweight, no more large bundle sizes
- 🤓 **Extensible** - Extend the `State` class to create your own custom state object.

## Installation

This will be available when the package is published.

## Documentation

### APIs

### `State`

The `State` class is the main API that powers all of the other APIs. You can create your own custom state class by extending this one. This API introduces a whole another world of possibilities and provides more flexibility and customasibility.

**Classic**

```ts
const name = new State(10);

name.onChange = newValue => {
	console.log(newValue());
};
```

**Extended State**:

```ts
import { State, createState } from 'dapper';

class CredentialsStore extends State<string> {
	verifyValue(value: string) {
		return value.length > 5;
	}

	// You can also override other methods like
	get() {}
	set() {}

	onChange = newValue => {};

	// You could also add a custom action
	// to organise your code.
	fetchData() {}
}

// you can call the actions inside your state
const [name, setName, nameInstance] = createStateWith(
	CredentialsStore('some-name')
);

nameInstance.get();
```

#### `createState()`

Creates a new `State` object and returns an instance of it. This function is just a simplified form of the `State` class. If you wanna read about the usage, you might need to checkout the [State](https://github.com/TruelinesHQ/dapper#state) API.

Usage:

```ts
const isPrivate = createState(false);

isPrivate.get();

isPrivate.set(true);
```

**With Initial Effect**:

```ts
const isPrivate = createState(false);
```

#### `createStateWith()`

Alternative to the `createState()` API but instead also adds support for extensibility of a custom state class. Althought the return value of this function is same as the `createState()` API, the function doesn't expect a value directly and instead the instance of the extended class. But you can pass the `initialEffect` as the second argument.

```ts
class CustomClass<T> extends State<T> {
	...
}

const state = createStateWith(
	new CustomClass(...)
);
```

### Example

```ts
import { createState } from 'dapper';

/**
 * Creates a new state object and returns an array of three elements with
 * the first one as the getter and second one as the setter and the third
 * one is the instane of the state object, this might be needed in
 * scenarios when you need to use `registerEffect()` hook
 * Expects a default value in the first parameter. The secon
 * parameter is an optional initial effect callback. I
 * passes in the initial value passed in to the `createState
 * function. This was created in order to fix the
 * accessing the value before it was initialised error.
 *
 * The getter is a function, so you would you have to call it to get the
 * state.
 *
 * The setter is also a function which you need to provide a new value to
 * be passed in to the function. If the new value passed in is the same as
 * the old one is used and the new unchanged value is ignored.
 * This function is type-safe and if the new value's type is not the same
 * as the new one, it will throw an error.
 *
 * The instance is a object that has the value of the state object created
 * by registerEfffect() hook.
 */
const username = createState('anonymous');

/**
 * Registers an hook to trigger whenever a change is made. If you need to
 * detect changes from the creation of the state, you would need to register
 * it right after creating the state. This means that the changes would only
 * be detected after this hook is registered and not from the beginning.
 * So it would improve perfomance as it would help the developer optimise
 * triggering changes according to their apps.
 *
 * The first parameter is the callback when a new value is triggered. This
 * function also passes in the new value.
 *
 * The second parameter is instance of the state object. You can get the
 * instance from the createState() hook.
 */
username.onChange = newValue => {
	console.log(newValue);
};

// retrieving the value from the state.
username.get();

// setting the state, the callback inside the registerEffect() hook
// is triggered
username.set('hello-world');
```

## License

**dapper** is licensed under `MIT` and the copyright is owned by Haneen Mahdin.
