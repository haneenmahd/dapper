import State from "./State";

function useState<T>(value: T): StateObject<T> {
  const state = new State(value);

  const getter = () => state.get();
  const setter = (newValue: T) => state.set(newValue);

  return [getter, setter];
}

export default useState;
