import { useState } from "../lib/index";

test("Check if state has been changed", () => {
  const [checker, setValue] = useState("default");

  let newValue = "new value";
  setValue(newValue);

  expect(checker.get()).toEqual(newValue);
});
