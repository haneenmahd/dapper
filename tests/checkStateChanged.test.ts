import { createState } from "../lib/index";

test("Check if state has been changed", () => {
  const [checker, setValue] = createState("default");

  let newValue = "new value";
  setValue(newValue);

  expect(checker.get()).toEqual(newValue);
});
