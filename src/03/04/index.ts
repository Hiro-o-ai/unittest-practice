export function add(a: number, b: number) {
  const sum = a + b;
  if (sum > 100) {
    return 100;
  }
  return sum;
}

export function sub(a: number, b: number) {
  const sum = a - b;
  if (sum < 0) {
    return 0;
  }
  return sum;
}

export function addCustom(a: number, b: number) {
  const sum = a + b;
  if (sum > 200) {
    return 200;
  }
  return sum;
}

export function subCustom(a: number, b: number) {
  const sum = a - b;
  if (sum < -10) {
    return -10;
  }
  return sum;
}