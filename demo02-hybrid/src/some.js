import { sumInTypeScript } from './another';

export function sum(v1, v2) {
  return v1 + v2;
}

export function callTs() {
  // see hints
  console.log(sumInTypeScript(3, 4));
}
