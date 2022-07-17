type StateSetter<T> = (newValue: T) => void;
type StateGetter<T> = () => T;

type StateObject<T> = [StateGetter<T>, StateSetter<T>];
