// Тормозящая функция
export function throttle(callback: Function, limit: number) {
  let wait = false;
  return function () {
    if (!wait) {
      callback.call(1);
      wait = true;
      setTimeout(() => {
        wait = false;
      }, limit);
    }
  };
}
