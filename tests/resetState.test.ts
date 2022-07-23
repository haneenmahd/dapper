import { createState } from "../lib/index";

test("Reset state", () => {
  const [checker, setValue] = createState("default");

  let firstNewValue = "new value";
  setValue(firstNewValue);

  let finalNewValue = "final value";
  setValue(finalNewValue);

  expect(checker.get()).toEqual(finalNewValue);
});
