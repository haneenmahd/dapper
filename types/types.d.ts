interface StateObject<T> {
  value: T;
  onChange?: StateCallback<T>;

  set(newValue: T): void;
  get(): T;
}

type StateCallback<T> = (newValue: T) => void;

type StateDestructor<T> = [StateObject<T>, StateCallback<T>];
