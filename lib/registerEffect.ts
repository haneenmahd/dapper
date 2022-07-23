function registerEffect<T>(
  callback: (newValue: T) => void,
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
