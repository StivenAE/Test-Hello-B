const sum = require('./hello');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(15, 5)).toBe(20);
});
