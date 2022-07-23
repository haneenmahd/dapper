import { useState, registerEffect } from "../lib/index";

test("Check if registerEffect hook is being called", () => {
  const [checker, setValue] = useState("default");
  const [hasCalled, setCalled] = useState(false);

  registerEffect(() => {
    setCalled(true);
  }, [checker]);

  setValue("new value");

  expect(hasCalled.get()).toEqual(true);
});

test("Check if registerEffect hook with multiple objects is called", () => {
  const [checker, setValue] = useState("default");
  const [checker2, setValue2] = useState("default");
  const [hasCalled, setCalled] = useState(false);
  const [hasCalled2, setCalled2] = useState(false);

  registerEffect(() => {
    setCalled(true);
    setCalled2(true);
  }, [checker, checker2]);

  setValue("new value");

  expect(hasCalled.get()).toEqual(true);
  expect(hasCalled2.get()).toEqual(true);
});
