class State<T = any> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  set(newValue: T) {
    this.value = newValue;
  }

  get() {
    return this.value;
  }
}

export default State;
