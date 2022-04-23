import getLevel from '../mocking';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('ok response', () => {
  const mockObject = {
    status: 'ok',
    level: 2,
  };

  fetchData.mockReturnValue(mockObject);

  const result = getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');

  expect(result).toBe(`Ваш текущий уровень: ${mockObject.level}`);
});

test('not ok response', () => {
  const mockObject = {
    status: 'error',
    level: 2,
  };

  fetchData.mockReturnValue(mockObject);

  const result = getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');

  expect(result).toBe('Информация об уровне временно недоступна');
});
