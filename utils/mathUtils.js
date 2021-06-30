
// Rounds to given number to a specific given decimal place
export const customRounding = (num, numDecimals=2) => {
  return Number(Math.round(num + `e+${numDecimals}`) + `e-${numDecimals}`);
}

// Calculates percent change of a given number and the amount changed by
export const calcPercentChange = (prevVal, newVal) => {
  if (newVal < prevVal) return newVal <= 0 ? '-100%' : `${customRounding(-(1-(newVal/prevVal))*100, 3)}%`;
  else return `${customRounding((newVal/prevVal-1)*100, 3)}%`;
}

// console.log(customRounding(1.005, 2));
// console.log(calcPercentChange(1.0005, 1.0001));
