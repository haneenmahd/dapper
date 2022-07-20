import State from "./State";

function useState<T>(value: T): StateDestructor<T> {
  const state = new State(value);

  const getter = state;
  const setter = (newValue: T) => state.set(newValue);

  return [getter, setter];
}

export default useState;
