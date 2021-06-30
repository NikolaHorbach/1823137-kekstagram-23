// Рандомное значение
const getRandomize = function (minValue, maxValue) {
  const randomize = minValue + Math.random() * (maxValue + 1 - minValue);

  if (minValue >=0 && maxValue >= 0) {
    if (minValue > maxValue) {
      return 'Max value must be greater than min value';
    } else if (minValue === maxValue) {
      return 'Min value cannot be equal to the max value';
    }
    return Math.floor(randomize);
  }
  return 'Values can be from 0 and higher';
};

getRandomize(1, 4);

const getStringCheck = function (stringToCheck, maxStringLength) {
  return stringToCheck.length <= maxStringLength;
};

getStringCheck('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 120);
