function dubbleNum(num) {
  const dbl = num * 2;
  return dbl;
}
const a = dubbleNum(80);
console.log(a);

function odd(oddNum) {
  if (oddNum % 2 === 1) {
    return true;
  }
  return false;
}

console.log(odd(17));

function string(str) {
  const a = str;
  console.log(a);
}

string('Ataullah');

function Array(arr) {
  const array = arr;
  console.log(array);
}

const ab = [12, 4546, 66, 78687, 99, 9, 0, 76, 546, 34, 5235, 46457];
const bb = ['dfasfgg', 'sdfasdfgasd', 'afgadsgg', 'Ataulalh'];
Array(ab);
Array(bb);

const object = {
  firstName: 'Ataullah',
  Age: 18,
};

Array(object);

console.log('================');

function strArray(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    // console.log(element);
    if (element % 2 === 0) {
      //   console.log(element);
      sum += element;
    }
  }
  return sum;
}

const numArray = [
  232, 42, 42, 5435, 645, 6, 57, 456, 23, 456, 26, 2, 63, 743, 7, 3457, 3,
];
const output = strArray(numArray);
console.log(output);
