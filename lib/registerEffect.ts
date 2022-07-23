/**
 * Register an effect for the state object specified in the argument.
 * This function also supports specifying multiple state objects as arguments
 * when you want to have a common state for multiple state objects.
 *
 * ```ts
 * createEffect((newValue) => {
 *  // callback when the state is set
 * }, state);
 * ```
 *
 * @param callback {StateCallback<T>}
 * @param objects {StateObject<T> | StateObject<T>[]}
 */
function registerEffect<T>(
  callback: StateCallback<T>,
  objects: StateObject<T> | StateObject<T>[]
) {
  if (Array.isArray(objects)) {
    objects.forEach((object) => {
      object.onChange = callback;
    });

    return;
  }

  objects.onChange = callback; // we don't need to call the onChange() function
}

export default registerEffect;
