import { useState, useEffect } from "../lib/index";

test("Set state", () => {
  const [checker, setValue] = useState("default");
  const [hasCalled, setCalled] = useState(false);

  useEffect(() => {
    setCalled(true);
  }, [checker]);

  setValue("new value");

  expect(hasCalled.get()).toEqual(true);
});
