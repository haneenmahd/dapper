import { baseline, bench, run } from 'mitata';
import { createStore } from 'redux';
import { createState, registerEffect } from '../lib';

baseline('StateX', () => {
	const [getter, setter, instance] = createState(0);

	registerEffect(() => {}, [instance]);

	setter(getter() + 1);
	setter(getter() + 1);
	setter(getter() - 1);
});

bench('Redux', () => {
	function counterReducer(state = { value: 0 }, action) {
		switch (action.type) {
			case 'counter/incremented':
				return { value: state.value + 1 };
			case 'counter/decremented':
				return { value: state.value - 1 };
			default:
				return state;
		}
	}
	const store = createStore(counterReducer);
	store.subscribe(() => {});
	store.dispatch({ type: 'counter/incremented' });
	store.dispatch({ type: 'counter/incremented' });
	store.dispatch({ type: 'counter/decremented' });
});

await run({
	avg: true,
	json: false,
	colors: true,
	min_max: true,
	collect: false,
	percentiles: false
});
