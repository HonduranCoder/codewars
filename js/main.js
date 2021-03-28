//CODEWARS

//Multiply 8kyu
function multiply(a, b){
  a * b
}
function multiply(a, b){
  return a * b
}

multiply(4,5)

//remove character 8kyu
function removeChar(str){
  return str.slice(1,-1)
}

//Keep Hydrated 8kyu

function litres(time) {
  return Math.floor(time/2);
}

//8kyu
function removeChar(str){
  return str.slice(1,-1)
}

//String Ends with 7kyu
function solution(str, ending){
 return str.indexOf(ending, str.length - ending.length) !== -1
}

function sumStr(a,b) {
return ((+a) + (+b)).toString()
}

//Get Number From String 8kyu
function getNumberFromString(s) {
  return Number(s.match(/\d/g).join(''))
}

//Sum of the first nth term of series 7kyu
function SeriesSum(n)
 {
  let result = 0
  let reverage = 1
  for (let i = 0; i < n; i += 1) {
    if (i === 0) {
      result = 1
    } else {
      reverage += 3
      result = result + (1 / reverage)
    }
  }
  return result.toFixed(2)
}

//Power 8kyu
function numberToPower(number, power){
   let result = 1
    for (let count = 0; count < power; count++) {
    result *= number
    }
    return result
  }

//Return the day 8kyu
whatday=n=>[,'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][n]||'Wrong, please enter a number between 1 and 7'

//Sentence Smash 8kyu
const smash = words => words.join(' ')

//Are arrow functions odd? 8kyu
function odds(values){
  return values.filter(function(num){ if( num % 2 ) return num})
}

//String repeat 8kyu
repeatStr = (n, s) => s.repeat(n)

//Well of Ideas 6kyu
function well(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'good') {
      count++;
    }
  }
  return count > 2 ? 'I smell a series!' : count >= 1 ? 'Publish!' : 'Fail!';
}

//Maximum subarray sum 5kyu
function maxSequence(arr){
  let currentSum = 0
  let maxSum = 0

  if(arr.length === 0){
      return 0
  }

  arr.forEach(a => {
    currentSum = Math.max(a, currentSum + a)
    maxSum = Math.max(maxSum, currentSum)
  })
  return maxSum
}

maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4])

//Print Errors 7kyu
function printError(s){
  const dic = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
   const splitString = s.split('')
   let error = 0
   splitString.map((x) =>  dic.includes(x) === false ? error += 1
}
