interface StateObject<T> {
  value: T;
  onChange?: (newValue: T) => void;

  set(newValue: T): void;
  get(): T;
}

type StateSetter<T> = (newValue: T) => void;

type StateDestructor<T> = [StateObject<T>, StateSetter<T>];
