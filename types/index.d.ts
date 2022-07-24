export interface StateObject<T> {
  value: T;
  onChange?: StateCallback<T>;

  set(newValue: T): void;
  get(): T;
}

export type StateCallback<T> = (newValue: T) => void;

export type StateDestructor<T> = [StateObject<T>, StateCallback<T>];
