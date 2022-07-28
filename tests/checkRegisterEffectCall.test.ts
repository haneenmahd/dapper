import { createState, registerEffect } from '../lib/index';

test('Check if registerEffect hook is being called', () => {
  const [checker, setValue] = createState('default');
  const [hasCalled, setCalled] = createState(false);

  registerEffect(() => {
    setCalled(true);
  }, [checker]);

  setValue('new value');

  expect(hasCalled.get()).toEqual(true);
});

test('Check if registerEffect hook with multiple objects is called', () => {
  const [checker, setValue] = createState('default');
  const [checker2, setValue2] = createState('default');
  const [hasCalled, setCalled] = createState(false);
  const [hasCalled2, setCalled2] = createState(false);

  registerEffect(() => {
    setCalled(true);
    setCalled2(true);
  }, [checker, checker2]);

  setValue('new value');

  expect(hasCalled.get()).toEqual(true);
  expect(hasCalled2.get()).toEqual(true);
});
