import { useState } from "../lib/index";

test("Reset state", () => {
  const [checker, setValue] = useState("default");

  let firstNewValue = "new value";
  setValue(firstNewValue);

  let finalNewValue = "final value";
  setValue(finalNewValue);

  expect(checker.get()).toEqual(finalNewValue);
});
