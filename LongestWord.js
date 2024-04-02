let str = "Watch Thapa technical javascript course on youtube";
let arr = str.split(" ");
let maxLength = 0;
let len = 0;
let indexWorrd = 0;
let res = 0;

// Solution 1
function longestWord() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
      res = i;
    }
  }
  return console.log(arr[res]);
}
longestWord();

// Solution 2
function mapFun() {
  arr.map((ele, index) => {
    if (ele.length > len) {
      len = ele.length;
      indexWorrd = index;
    }
  });
  console.log(arr[indexWorrd]);
}
mapFun();

// Solution 3

const findLongestWord = (str) => {
  if (str.trim().length == 0) {
    return false;
  }
  words=str.split(" ");
  words.sort((a, b)=> a.length - b.length);
  return words[words.length-1];
};

console.log(
  findLongestWord("Watch Thapa technical javascript course  on youtube")
);
