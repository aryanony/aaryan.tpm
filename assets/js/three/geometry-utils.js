// assets/js/three/geometry-utils.js

export function distance3D(x1, y1, z1, x2, y2, z2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);
}

export function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}
