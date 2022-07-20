import { useState } from "../lib/index";

test("Set state", () => {
  const [checker, setValue] = useState("default");

  let newValue = "new value";
  setValue(newValue);

  expect(checker.get()).toEqual(newValue);
});
