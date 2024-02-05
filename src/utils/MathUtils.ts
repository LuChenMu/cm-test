export function autoMath(maxMinuend?: number, maxResult?: number) {
  const __MAX_MINUEND__ = maxMinuend || 10; //最大被减数，减法需要
  const __MAX_RESULT__ = maxResult || 10; //最大运算结果
  const operate: number = parseInt(String(Math.random() * 2)); //运算符号，0为减法，1为加法
  let a;
  let b;
  let result;
  switch (operate) {
    case 0: //减法
      result = parseInt(String((Math.random() * __MAX_RESULT__) / 2));
      a =
        parseInt(String(Math.random() * (__MAX_MINUEND__ - 1 - result))) +
        result +
        1;
      b = a - result;
      console.log(0, result, a, b);
      break;
    case 1: //加法
      result = parseInt(String(Math.random() * (__MAX_RESULT__ - 2))) + 2;
      a = parseInt(String(Math.random() * (result - 1))) + 1;
      b = result - a;
      console.log(1, result, a, b);
      break;
  }
  const mathTopic = a + (operate ? "+" : "-") + b + "=";
  return {
    mathTopic,
    result,
  };
}

export function autoMath2(MaxCount?: number) {
  const __MAX_COUNT__ = MaxCount || 10;
  const operate: number = parseInt(String(Math.random() * 2)); //运算符号，0为减法，1为加法
  let a;
  let b;
  let result;
  switch (operate) {
    case 0:
      // -
      a = parseInt(String(Math.random() * __MAX_COUNT__ - 1)) + 1;
      b = parseInt(String(Math.random() * a - 1)) + 1;
      result = a - b;
      break;
    case 1:
      // +
      a = parseInt(String(Math.random() * __MAX_COUNT__ - 1)) + 1;
      b = parseInt(String(Math.random() * __MAX_COUNT__ - 1)) + 1;
      result = a + b;
      break;
  }
  const mathTopic = a + (operate ? " + " : " - ") + b + " =";
  return {
    mathTopic,
    result,
  };
}
