export const Wait = async(delay: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, delay)
  });
}