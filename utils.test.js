const {Vec, getTimeStr} = require('./utils');

describe('Vec', () => {
  test('new Vec(1, 2) retourne {x: 1 y: 2}', () => {
    expect(new Vec(1, 2)).toEqual({x: 1, y: 2});
  });

  test('new Vec(1, 2).add(new Vec(3, 4)) retourne {x: 4, y: 6}', () => {
    expect(new Vec(1, 2).add(new Vec(3, 4))).toEqual({x: 4, y: 6});
  });

  test('new Vec(1, 2).mul(-2, 3) retourne {x: -2, y: 6}', () => {
    expect(new Vec(1, 2).mul(-2, 3)).toEqual({x: -2, y: 6});
  });

  test('new Vec(1, 2).dot(new Vec(2, 1)) retourne 4', () => {
    expect(new Vec(1, 2).dot(new Vec(2, 1))).toBe(4);
  });

  test('new Vec(1, 2).cross(new Vec(3, 4).mul(-2, 3)) retourne 24', () => {
    expect(new Vec(1, 2).cross(new Vec(3, 4).mul(-2, 3))).toBe(24);
  });

  test('new Vec(1, 2).add(3) retourne {x: NaN, y: NaN}', () => {
    expect(new Vec(1, 2).add(3)).toEqual({x: NaN, y: NaN});
  });

  test('new Vec(1, 1).cross(new Vec(-42, -42)) retourne 0', () => {
    expect(new Vec(1, 1).cross(new Vec(-42, -42))).toBe(0);
  });

  test('new Vec(0, 0).add(new Vec(0, 0)) retourne {x: 0, y: 0}', () => {
    expect(new Vec(0, 0).add(new Vec(0, 0))).toEqual({x: 0, y: 0});
  });

  test('new Vec(5, 2).add(new Vec(1, 2)) retourne {x: 0, y: 0}', () => {
    expect(new Vec(5, 2).add(new Vec(1, 2))).toEqual({x: 6, y: 4});
  });

  test('new Vec(2, 3).mul(2) retourne {x: 4, y: 6}', () => {
    expect(new Vec(2, 3).mul(2)).toEqual({x: 4, y: 6});
  });

  test('new Vec(3, 4) retourne {x: 3 y: 4}', () => {
    expect(new Vec(3, 4)).toEqual({x: 3, y: 4});
  });

  test('new Vec(3, 2).add(new Vec(1, 4)) retourne {x: 4, y: 6}', () => {
    expect(new Vec(3, 2).add(new Vec(1, 4))).toEqual({x: 4, y: 6});
  });
});

describe('getTimeStr', () => {
  test('getTimeStr(424242) retourne "7:04.24"', () => {
    expect(getTimeStr(424242)).toBe('7:04.24');
  });

  test('getTimeStr(-123456) retourne "-3:-4.-4"', () => {
    expect(getTimeStr(-123456)).toBe('-3:-4.-4');
  });
});
