import { createState, registerEffect } from '../lib/index';

test('Check if registerEffect hook is being called', () => {
	const [, setValue, checkerInstance] = createState('default');
	const [hasCalled, setCalled] = createState(false);

	registerEffect(() => {
		setCalled(true);
	}, [checkerInstance]);

	setValue('new value');

	expect(hasCalled()).toEqual(true);
});

test('Check if registerEffect hook with multiple objects is called', () => {
	const [, setValue, checkerInstance] = createState('default');
	const [, setValue2, checker2Instance] = createState('default');
	const [hasCalled, setCalled] = createState(false);
	const [hasCalled2, setCalled2] = createState(false);

	registerEffect(() => {
		setCalled(true);
		setCalled2(true);
	}, [checkerInstance, checker2Instance]);

	setValue('new value');
	setValue2('new value - 2');

	expect(hasCalled()).toEqual(true);
	expect(hasCalled2()).toEqual(true);
});
