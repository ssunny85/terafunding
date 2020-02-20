export default function amountUnit(number) {
  const inputNumber = number < 0 ? false : number;
  const unitWords = ['', '만', '억', '조', '경'];
  const splitUnit = 10000;
  const splitCount = unitWords.length;
  const resultArray = [];
  for (let i = 0; i < splitCount; i += 1) {
    let unitResult = (inputNumber % (splitUnit ** (i + 1))) / splitUnit ** i;
    unitResult = Math.floor(unitResult);
    if (unitResult > 0) {
      resultArray[i] = unitResult;
    }
  }
  let resultUnit = '';
  let resultSum = 0;
  const resultArraySize = resultArray.length;
  if (resultArraySize > 0) {
    resultSum += resultArray[resultArraySize - 1];
    if (resultArraySize > 1 && !!resultArray[resultArraySize - 2]) {
      resultSum += (resultArray[resultArraySize - 2] / 10000);
    }
    resultUnit = unitWords[resultArraySize - 1];
  }
  return String(resultSum).split('.')
    .map((s, idx) => (idx === 0 ? s.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : s))
    .join('.') + resultUnit;
}
