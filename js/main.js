// Рандомное значение
let getRandomize = function (minValue, maxValue) {
  let randomize = minValue + Math.random() * (maxValue + 1 - minValue);

  if (minValue >=0 && maxValue >= 0) {
    switch (minValue >=0 && maxValue >= 0) {

      case minValue > maxValue:
        console.log('Max value must be greater than min value');
        break

      case minValue === maxValue:
        console.log('Min value cannot be equal to the max value')
        break

      default:
        return Math.floor(randomize);
    };
  };

  if (minValue < 0 || maxValue < 0) {
    console.log('Values can be from 0 and higher')
  };
};

getRandomize(1, 4);

// Проверка строки
let stringToCheck
let maxStringLength = 120;
let getStringCheck = function (stringToCheck, maxStringLength) {
  if (stringToCheck.length <= maxStringLength) {
    return true;
  }
  return false;
};

stringToCheck = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'

getStringCheck(stringToCheck, maxStringLength);
