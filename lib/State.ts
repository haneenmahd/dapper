class State<T> implements StateObject<T> {
  value: T;
  onChange?: (newValue: T) => void;

  constructor(value: T, onChange?: (newValue: T) => void) {
    this.value = value;
    this.onChange = onChange;
  }

  set(newValue: T) {
    this.value = newValue;

    if (this.onChange) {
      this.onChange(this.value);
    }
  }

  get() {
    return this.value;
  }
}

export default State;
