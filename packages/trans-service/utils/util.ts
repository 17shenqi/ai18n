export function sleep(d: number) {
  for (var t = Date.now(); Date.now() - t <= d;);
}
