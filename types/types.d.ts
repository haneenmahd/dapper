interface StateObject<T> {
  value: T;
  onChange?: (newValue: T) => void;

  set(newValue: T): void;
  get(): T;
}

type StateSetter<T> = (newValue: T) => void;
type StateGetter<T> = StateObject<T>;

type StateDestructor<T> = [StateGetter<T>, StateSetter<T>];
