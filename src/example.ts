// 1

type StringType = string;

function concat(fstStr: StringType, secStr: StringType) {
  return fstStr + secStr;
}

concat('Hello', 'World');

// 2
type tsArr = string | number;

interface myHometaskInterface {
  howIDoIt: string;
  simeArray: tsArr[];
  withData: withDataInterface[];
}

interface withDataInterface {
  howIDoIt: string;
  simeArray: tsArr[];
}

const myHometask: myHometaskInterface = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

console.log(myHometask.howIDoIt);

// 3
interface MyArray<T> {
  [N: number]: T;

  reduce<U>(fn: (acc: T, init: T) => U, initVal: U): U;
}

const tsArr3: MyArray<number> = [1, 2, 3, 4, 5, 6, 7];

tsArr3.reduce((a, b) => a + b, 0);
