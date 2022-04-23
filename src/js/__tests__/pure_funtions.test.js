import getColorIndicator from '../pure_functions';

const DATA = [
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 51 }, 'healthy'],
  [{ name: 'Маг', health: 50 }, 'wounded'],
  [{ name: 'Маг', health: 15 }, 'wounded'],
  [{ name: 'Маг', health: 14 }, 'critical'],
  [{ name: 'Маг', health: 1 }, 'critical'],
];

test('null object', () => {
  let errorMessage = '';
  try {
    getColorIndicator(null);
  } catch (err) {
    errorMessage = err.toString();
  }
  expect(errorMessage).toBe('TypeError: Empty value');
});

test('undefined property', () => {
  let errorMessage = '';
  try {
    getColorIndicator({});
  } catch (err) {
    errorMessage = err.toString();
  }
  expect(errorMessage).toBe('Error: not contain health property');
});

const handler = test.each(DATA);

handler('correct return value test', (object, expected) => {
  const result = getColorIndicator(object);
  expect(result).toBe(expected);
});
