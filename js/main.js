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
  return Math.floor(time/2)
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
   splitString.map((x) =>  dic.includes(x) === false ? error += 1 : error += 0
    return `${error}/${s.length}`
}

function printerError(s) {
  return (s.match(/[n-z]/ig) === null ? 0 : s.match(/[n-z]/ig).length) + '/' + s.length
 }

//Training Js #18
function splitAndMerge(str,sp){
  let words = str
  return words.split(" ").map(index => index.split("").join(sp)).join(" ")
}

//List Filtering
function filter_list(l) {
  return l.filter((e) => {
      return typeof e !== 'string'
    })
  }

//Find Maximum and Minimum Values of a List
let min = function(list){
  return Math.min(...list)
}
let max = function(list){
    return Math.max(...list)
}

//Opposite Number
function opposite(n) {
  return -n
}

//Beginner-Reduce but Grow
function grow(x){
  return x.reduce((res,n)=> res*n)
}

//Descending Order
function descendingOrder(n){
      return parseInt((n+'').split('').sort().reverse().join(''))
}

//Two Fighters, One Winner
function Fighter(name, health, damagePerAttack) {
        this.name = name
        this.health = health
        this.damagePerAttack = damagePerAttack
        this.toString = function() { return this.name }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  var result,
      winner

      if (fighter1.name == firstAttacker) {
          firstAttacker = fighter1;
          battlev1();
        } else if (fighter2.name == firstAttacker) {
          firstAttacker = fighter2;
          battlev2();
        } else {
          console.log(`${firstAttacker} isn't fighting right now!`)
        }
        function battlev1() {
     while (firstAttacker.health > 0 && fighter2.health > 0) {
       fightv1();
     }
   }

   function fightv1() {
   fighter2.health -= firstAttacker.damagePerAttack
   result = `${firstAttacker.name} attacks ${fighter2.name}; ${fighter2.name} now has ${fighter2.health} health.`;
   console.log(result);
     if(fighter2.health <= 0) {
       result = `${firstAttacker.name} attacks ${fighter2.name}; ${fighter2.name} now has ${fighter2.health} health and is dead. ${firstAttacker.name} wins`
       winner = firstAttacker.name
       console.log(result)
       return winner
     } else if (firstAttacker.health <= 0) {
       result = `${fighter2.name} attacks ${firstAttacker.name}; ${firstAttacker.name} now has ${firstAttacker.health} health and is dead. ${fighter2.name} wins`
       winner = fighter2.name
       console.log(result)
       return winner
     }

     firstAttacker.health -= fighter2.damagePerAttack;
   result = `${fighter2.name} attacks ${firstAttacker.name}; ${firstAttacker.name} now has ${firstAttacker.health} health.`
   console.log(result);
     if(firstAttacker.health <= 0) {
       result = `${fighter2.name} attacks ${firstAttacker.name}; ${firstAttacker.name} now has ${firstAttacker.health} health and is dead. ${fighter2.name} wins`
       winner = fighter2.name
       console.log(result)
       return winner
     } else if (fighter2.health <= 0) {
       result = `${firstAttacker.name} attacks ${fighter2.name}; ${fighter2.name} now has ${fighter2.health} health and is dead. ${firstAttacker.name} wins`
       winner = firstAttacker.name
       console.log(result)
       return winner;

 }
       function fightv2() {
      fighter1.health -= firstAttacker.damagePerAttack
      result = `${firstAttacker.name} attacks ${fighter1.name}; ${fighter1.name} now has ${fighter1.health} health.`
      console.log(result)
      if(fighter1.health <= 0) {
        result = `${firstAttacker.name} attacks ${fighter1.name}; ${fighter1.name} now has ${fighter1.health} health and is dead. ${firstAttacker.name} wins`
        winner = firstAttacker.name
        console.log(result)
        return winner
      } else if (firstAttacker.health <= 0) {
        result = `${fighter1.name} attacks ${firstAttacker.name}; ${firstAttacker.name} now has ${firstAttacker.health} health and is dead. ${fighter1.name} wins`
        winner = fighter1.name
        console.log(result)
        return winner
      }

    firstAttacker.health -= fighter1.damagePerAttack
    result = `${fighter1.name} attacks ${firstAttacker.name}; ${firstAttacker.name} now has ${firstAttacker.health} health.`
    console.log(result)
      if(fighter1.health <= 0) {
        result = `${firstAttacker.name} attacks ${fighter1.name}; ${fighter1.name} now has ${fighter1.health} health and is dead. ${firstAttacker.name} wins`
        winner = firstAttacker.name
        console.log(result)
        return winner
      } else if (firstAttacker.health <= 0) {
        result = `${fighter1.name} attacks ${firstAttacker.name}; ${firstAttacker.name} now has ${firstAttacker.health} health and is dead. ${fighter1.name} wins`
        winner = fighter1.name
        console.log(result)
        return winner
      }
    }
    return winner
}
     function fightv2() {
       fighter1.health -= firstAttacker.damagePerAttack;
   result = `${firstAttacker.name} attacks ${fighter1.name}; ${fighter1.name} now has ${fighter1.health} health.`
   console.log(result)
     if(fighter1.health <= 0) {
       result = `${firstAttacker.name} attacks ${fighter1.name}; ${fighter1.name} now has ${fighter1.health} health and is dead. ${firstAttacker.name} wins`
       winner = firstAttacker.name
       console.log(result)
       return winner
     } else if (firstAttacker.health <= 0) {
       result = `${fighter1.name} attacks ${firstAttacker.name}; ${firstAttacker.name} now has ${firstAttacker.health} health and is dead. ${fighter1.name} wins`
       winner = fighter1.name
       console.log(result)
       return winner
     }
     firstAttacker.health -= fighter1.damagePerAttack
     result = `${fighter1.name} attack
     ${firstAttacker.name}; ${firstAttacker.name} now has ${firstAttacker.health} health.`
     console.log(result);
  if(fighter1.health <= 0) {
    result = `${firstAttacker.name} attacks ${fighter1.name}; ${fighter1.name} now has ${fighter1.health} health and is dead. ${firstAttacker.name} wins`
    winner = firstAttacker.name
    console.log(result)
    return winner
  } else if (firstAttacker.health <= 0) {
    result = `${fighter1.name} attacks ${firstAttacker.name}; ${firstAttacker.name} now has ${firstAttacker.health} health and is dead. ${fighter1.name} wins`
    winner = fighter1.name
    console.log(result)
    return winner
  }
}
return winner
}
declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry")

//Complete the Pattern #1
function patter(n){
  var res = [], i
   for(i = 1; i <= n; i++) {
     res.push(Array(i + 1).join(i))
  }
    return res.join('\n')
}

//Find the perfect square
function findNextSquare(sq) {j
 var sqRt = Math.sqrt( sq )
 if ( NaN === sqRt || sqRt !== parseInt( sqRt, 10 ) ) {
return -1
}
return Math.pow( sqRt + 1, 2 )
}

//Jaden Casing Strings
String.prototype.toJadenCase = function () {
  return this.split(' ')
  map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
}

//Beginner Series #3 Sum of Numbers
function getSum(a,b){
  let count = 0
  if (a == b) return a
  if(a < b){
     for (; a <= b; a++){
       count += a
}
  } else if (a > b){
    for(; b <= a; b++){
      count += a
    }
  } else if (a > b){
for(; b <= a; b++){
  count += b
}
}
return count
}

//Replave Every nth
function replaceNth(text, n, oldValue, newValue) {}
let i = 0
return n > 0 ? text.replace(new RegExp(oldValue, "g"), c => ++i % n === 0 ? newValue : c) : text
}

//Convert String to Camel Case
function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

//Exes ands Ohs
function XO(str) {
  let x = str.match(/x/gi)
  let o = str.match(/o/gi)
  return (x && x.length) === (o && o.length);
}

//Exclamation marks series #13
function product(s){
  return (s.match(/\?/g)||[]).length*(s.match(/!/g)||[]).length
}

//Birthday -Cake 
function cake(x, y){
  let num=y.split('').reduce((a,b,i)=>a+(i%2===0?b.charCodeAt(0):b.charCodeAt(0)-96),0);
  return x*0.7>num?'That was close!':'Fire!'
}

//Say Hello
function greet(name) {
  if(name==null||name.length==0) return null;
  return `hello ${name}!`
}

//Autocomplete!Yay!
function autocomplete(input, d){
  input=input.replace(/[^a-zA-Z]/gi,'')
  const arr=[];
  for (let i=0;i<d.length;i++){