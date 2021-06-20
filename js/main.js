// Рандомное значение
const getRandomize = function (minValue, maxValue) {
  const randomize = minValue + Math.random() * (maxValue + 1 - minValue);

  if (minValue >=0 && maxValue >= 0) {
    switch (minValue >=0 && maxValue >= 0) {

      case minValue > maxValue:
        return 'Max value must be greater than min value';

      case minValue === maxValue:
        return 'Min value cannot be equal to the max value';

      default:
        return Math.floor(randomize);
    }
  }

  if (minValue < 0 || maxValue < 0) {
    return 'Values can be from 0 and higher';
  }
};

getRandomize(1, 4);

// Проверка строки
const stringToCheck = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
const maxStringLength = 120;
const getStringCheck = function () {
  return stringToCheck.length <= maxStringLength;
};

getStringCheck(stringToCheck, maxStringLength);
