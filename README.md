<img height="500px" src="https://github.com/TruelinesHQ/statex/blob/main/resources/banner.png" alt="Banner" />

<br />

**StateX** is a blazing fast and lightweight framework for managing state in a Javascript app.

## Features

- 💨 **Fast** − Our APIs just run lightning fast, no more slowdowns.
- 🔋 **Efficient** - To reduce the consumption of energy, we have optimised it.
- ⛑ **Type Safe** - To prevent type errors and bugs, we have made the framework type-safe.
- 🛳 **Portable** - This framework works accorss web and Node environments. You can use this library together with React or any other Javascript UI libraries.
- 😵 **Tiny (>2kb)** - Too much lightweight, no more large bundle sizes
- 🤓 **Extensible** - Extend the `State` class to create your own custom state object.
- 🫥 **Asynchronous** - If you are fed-up with how messy it is to save state inside a asynchronous operation, say goodbye to it.

## Installation

This will be available when the package is published.

## Documentation

### APIs

#### `createState()`

Creates a new state object and return an array with it's first value as the getter and second value as an setter and the third as the instance of the state. Instead of creating a new new instance of `State`, this function should be used. Expects a default value in the first parameter.

Usage:

```ts
const [isPrivate, setPrivacy] = createState(false);

const value = isPrivate();

setPrivacy(true);
```

**With Initial Effect**:

```ts
const [isPrivate, setPrivacy] = createState(false, initialValue => /* do something with the value */);
```

#### `createStateWith()`

Alternative to the `createState()` API but instead also adds support for extensibility of a custom state class. Althought the return value of this function is same as the `createState()` API, the function doesn't expect a value directly and instead the instance of the extended class. But you can pass the `initialEffect` as the second argument.

```ts
class CustomClass<T> extends State<T> {
	...
}

const [data, setData] = createState(
	new CustomClass(...),
	initialValue => console.log(initialValue)
);
```

#### `registerEffect()`

Registers an effect for the state object specified in the argument. This function also supports specifying multiple state objects as arguments when you want to have a common state for multiple state objects.

This hook needs to be registered before making any changes in the state, if you wanna trigger all the changes every happened. The best practice is to make sure this function is registered right after
creating the state.

```ts
registerEffect(newValue => {
	// callback when the state is set
}, state);
```

### Example

```ts
import { createState, registerEffect } from 'statex';

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
const [username, setUsername, usernameInstance] = createState('anonymous');

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
registerEffect(newValue => {
	console.log(newValue);
}, usernameInstance);

// retrieving the value from the state.
username();

// setting the state, the callback inside the registerEffect() hook
// is triggered
setUsername('hello-world');
```

## License

**StateX** is licensed under `MIT` and the copyright is owned by Haneen Mahdin.
