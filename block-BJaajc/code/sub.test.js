/* eslint-disable no-undef */
const sub = require('./sub');

test('sub 100 - 20 to equal 80', () => {
  expect(sub(100, 20)).toBe(80);
});
