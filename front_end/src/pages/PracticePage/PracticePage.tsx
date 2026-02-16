import React, { useState } from 'react'

const PracticePage = () => {
const [selectedDuplicationNumber, setSelectedDuplicationNumber] = useState(false)
  type propMath = {
    max: number,
    min: number,
  }
  function helloWorld(){
    alert("hello world")
  }

  function basicMath(a: number, b:number): void {
    alert(a+b) // add
    alert(a-b) // subtract
    alert(a*b) // multiple
    alert(a/b) // divide
  }

  function findMinMax(a: number, b: number, c: number): propMath {
    let max = Math.max(a, b, c)
    let min = Math.min(a, b, c)
    return {max: max,min: min}
  }

  function findLeapYear(years: number[]): void{
    alert("this is the list of the year");
    for(let year of years){
      if(year % 4 ===0 
        && year % 100 !==0
      ){
        alert(`${year} is leap year`);
      }else if (year % 400 === 0 && year % 100 ==0){
        alert(`${year} is leap year`)
      }else{
        alert(`${year} is not leap year`)
      }
    }
    }
  
 function findGradeStudent(grades: number[]): void{
   alert("Find good, average and bad grade student");
   for(let grade of grades  ){
    if(grade >= 8 && grade <11){
      alert(`${grade} is good`)
    }else if (grade>=5 && grade <8){
      alert(`${grade} is average`)
    }else if (grade < 5){
      alert(`${grade} is bad`)
    }
   }
 }

 function firstDegreeEquation(a: number, b:number): void{
    if(a === 0){
      alert("this is void");
    }else{
      alert((-b/a))
    }
 }

 function secondDegreeEquation(a: number,b: number, c:number): void{
  const delta =  Math.pow(b,2) - 4*a*c
  if(a === 0){
    alert(c/b)
  }else if(delta < 0){
    alert("there is no result")
  }else if(delta > 0){
    alert(`Root 1: ${(-b+Math.sqrt(delta))/(2*a)}, Root 2: ${(-b-Math.sqrt(delta))/(2*a)}`)
  }else if(delta === 0){
    alert(-b/2*a)
  }
 }

 function convertCDegreeToFDegree(temparature: number): number{
  const result = (temparature * (9/5)) + 32;
  return result
 }

 function findTypeOfTriangle(a: number, b:number, c:number): void{
  if(a>0 && b>0 && c>0){
  // isosceless triangle
  if(a===b || a===c){
    alert(`this triangle is isosceless triangle`);
  }else if(a===b && b===c){
    // equaliteral triangle
    alert(`this triangle is equaliteral triangle`);
  }else if((a*a + b*b === c*c) || (a*a + c*c === b*b) || (b*b + c*c === a*a)){
    // right triangle
    alert(`this triangle is right triangle`);
  }
  }
 }

 function printNtoOneAndContrast(n: number): void{
  let i = 1;
  const result: number[] = [];
  while(i<n){
    result.push(i)
    i++
  }
  alert(`this is array: ${result.join(' ')} and this is reverse: ${result.reverse().join(' ')}`)
 }


 function arraySum(n: number): void{
  let i = 1;
  let result: number = 0;
  while(i<=n){
    result+=i;
    i++;
  }
  alert(`arraySum is ${result}`)
 }

 function arrayDuplicate(n: number): void{
  let i = 1;
  let result: number = 1;
  while(i<=n){
    result*=i;
    i++;
  }
  alert(`arraySum is ${result}`)
 }

 function multiplicationTable(n: number): (number[]|undefined){
  if(n<=9 && n>=2){
    let i = 1;
    let result: number[] = [];
    while(i <= 10){
      let temp = i*n;
      result.push(temp)
      i++;
    }
    return result;
  }
 }

 function isPrimeNumber(n: number): void{
  if(n<=1){
    alert('this is not a prime number')
  }else if(n>1){
    for(let i=2;i<Math.sqrt(n);i++){
      if(n%1==0 && n%i==0){
        alert('this is not a prime number')
      }else{
        alert('this is prime number')
      }
    }
  }
 }

 function isArrayPrimeNumber(n: number):void{
  let result: number[] = []
  if(n<2){
    alert(`there is no prime number in array`)
  }else if (n>=2){
    for(let i=2;i<n;i++){
      if(n%i==0){
        result.push(i)
      }
    }
    alert(`${result.join(' ')}`)
  }
 }

 function isPerfectSquare(n: number): void{
  let result = Math.sqrt(n);
  if (Number.isInteger(result)){
    alert('this is perfectSquare')
  }else{
    alert('this is not perfectSquare')
  }
 }

 function isPerfectNumber(n: number): void{
  let result: number[] = []
  let temp = n
  if(temp === 0){
    result.push(0)
  }else if(temp>0){
    while(temp>0){
      let digit = temp % 10;
      result.unshift(digit)
      temp = Math.floor(temp/10)
    }
  }

  let perfectNumber = 0;
  for(let i =0 ; i<result.length;i++){
    perfectNumber+=result[i];
  }
  if(perfectNumber === n){
    alert(`yes, this is perfectNumber`)
  }else{
    alert("nah, it's not perfecNumber")
  }
  }

  function isFibonacci(n: number): void{
    let result: number[] = [0,1];
    if(n<2){
      alert(`result is ${result.join(',')}`)
    }else{
      for(let i=2;i<n;i++){
        let digit = result[i-1] + result[i-2];
        result.push(digit)
      }
      alert(` result is ${result.join(',')}`)
    }
  }
 
  function greatestCommonDivisor(a: number, b:number): number{
    a = Math.abs(a);
    b = Math.abs(b);

    while(b!==0){
      let temp = b;
      b = a%b;
      a=temp
    }
    return a;
  }

  function leastCommonMultiple(a: number, b: number){
    if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / greatestCommonDivisor(a, b);
  }

  function handleUCLN_BCNN(a: number, b: number): void {
    const ucln = greatestCommonDivisor(a, b);
    const bcnn = leastCommonMultiple(a, b);
    
    alert(`Với 2 số ${a} và ${b}:
    - UCLN là: ${ucln}
    - BCNN là: ${bcnn}`);
  }

  function reverseArray(n: number): void{
    let temp =n
    let result: number[] = [];
    while(temp>0){
      let digit = temp % 10;
      result.push(digit);
      temp = Math.floor(temp/10)
    }
    alert(`reverse array: ${result.join('')}`)
  }

  function findAllSumInNumber(n: number): void{
    let temp = n;
    let result: number= 0;
    while(temp>0){
      let digit = temp % 10;
      result+=digit;
      temp = Math.floor(temp/10)
    }
    alert(`All sum is ${result}`)
  }

  function findArray(n: number[]): void{
    let result: number[]= []
    n.map((value)=>{
      result.push(value)
    })
    alert(`this is array: ${result.join(',')}`)
  }

  function findMaxMinArray(n: number[]): void{
    let max: number=n[0];
    let min: number=n[0];
    for(let i=1; i<n.length;i++){
      if(n[i]>max){
        max=n[i]
      }
      if(n[i]<min){
        min=n[i]
      }
    }
    alert(`maxNumber is ${max} and minNumber is ${min}`)
  }

  function findEvenAndOdd(n: number[]): void{
    let even: number[] = [];
    let odd: number[] = [];
    n.map((value)=>{
    if(value % 2 ===0 ){
      even.push(value)
    }else{
      odd.push(value)
    }
    })
    alert(`this is even: ${even.join(',')} and this is odd: ${odd.join(',')}`)
    }

  function findXinArray(n: number[],x: number): void{
    let count: number = 0;
    const hasX = n.includes(x);
    if(!hasX){
      alert(`don't have ${x} so please don't do it`)
    }
    n.map((value)=>{
      if(x === value){
        count++;
      }
    })
    alert(`x is: ${x}, count is: ${count}`)
  }

  function bubbleSort(n:number[]):void{
    for(let i = 0;i< n.length ;i++){
      for( let j=0;j<n.length-1-i;j++){
        if(n[j] > n[j+1]){
          let temp = n[j];
          n[j] = n[j+1]
          n[j+1] = temp
        }
      }
    }
    alert(`bubble sorts is: ${n}`)
  }

  function insertXinIndex(n: number[],x: number,k: number): void{
    for(let i=n.length;i>k;i--){
      n[i] =  n[i-1];  // 1,2,3,3,4,5
    }
    n[k] = x
    alert(`${n}`)
  }

  function deleteXinIndex(n: number[], k:number):void{
    for(let i=k; i<n.length-1; i++){
      n[i] =n[i+1];
    }
    n.length--;
    alert(`this is ${n}`)
  }

  function isPalindrome(n: number[]){
    const array = n.join(',');
    const reverseArray = [...n].reverse().join(',');
    if(array === reverseArray){
      alert(`it's palindrome`)
    }else{
      alert(`it's not`)
    }
  }
  
  function union2array(a: number[],b: number[]):void{
    let c:number[]= [];
    c = a.concat(b);
    alert(`this is ${c}`)
  } 

  function countLetter(a: string): void{
    let countUpperCase: number = 0;
    let countLowerCase: number = 0;
    let countNumber: number = 0;
    const cleanedString = a.replace(' ','')
    for(let i=0;i<cleanedString.length;i++){
      let temp = a[i]
      if (/[0-9]/.test(temp)){
        countNumber++;
      }else 
      if(a[i] === temp.toUpperCase()){
        countUpperCase++
      }else
      if( a[i] === temp.toLowerCase()){
        countLowerCase++
      }
      
    }

    alert(`count upper case: ${countUpperCase}, count lower case: ${countLowerCase}, count number: ${countNumber}`)
  }

  function removeTrimAndUpperCaseFirstLetter(a: string):void{
    let temp = a.trim().split(" "); // split return an array
    let validString = temp.filter(word => word !== "");
    const processingWord = validString.map(word=>{
      let firstLetter = word[0].toUpperCase();
      let lastLetter = word.slice(1).toLowerCase();
      return firstLetter + lastLetter;
    })
    const result = processingWord.join(" ")
    alert(`${result} `)
  }

  function checkReverseString(a: string): void{
    let isPalindrome = a.split(" ").reverse().join(" ");
    if(isPalindrome === a){
      alert(`its palindrome`)
    }else{
      alert(`it's not`)
    }
  }
  
  function countWord(a: string): void{
    let count = 0;
    let temp = a.trim().split(" ").filter(word => word !== "");
    temp.forEach(word => {
      if(isNaN(Number(word))){
        count++;
      }
    })
    alert(`${count}`)
  }

  function countName(a: string): void{
    let firstName: string;
    let middleName: string;
    let lastName: string;

    let cleanedName = a.trim().split(" ");
    firstName = cleanedName[0];
    middleName = cleanedName.slice(1,cleanedName.length-1).join(" ");
    lastName = cleanedName[cleanedName.length-1]

    alert(`firstName: ${firstName}, middleName: ${middleName} ,lastName: ${lastName}`)
  }

  function checkSubString(a: string, b:string): void{
    if(a.includes(b)){
      alert('yes')
    }else{
      alert('no')
    }
  }

  function palindromeString(a:string): void{
    let result = a.split('').reverse().join('');
    console.log(result)
    alert(`${result}`)
  }

  function findMaxChar(str: string):void{
    let charMax: Record<string, number> = {}
    for ( let word of str){
      if(charMax[word]){
        charMax[word]++;
      }else{
        charMax[word] = 1
      }
    }

    let maxCount = 0
    let maxChar: string = "";

    for (let word of str){
      if(charMax[word] > maxCount){
        maxCount = charMax[word]
        maxChar = word;
      }
    }
    alert(`maxCount: ${maxCount} and maxChar: ${maxChar}`)
  }

  function printArray(a: number[][]): void{
    a.map((number) => {
      return number.join(' ');
    })

    let temp = a.join('\n')
    alert(temp)
  }

  type twoWayArray = number[][];
  function getRowSums(matrix: twoWayArray): number[] {
    return matrix.map(row => {
      return row.reduce((total,currentNumber) => total + currentNumber,0);
    })
}


  function sumColumns( matrix: twoWayArray): number[]{
    let rowLength = matrix.length;
    let colLength = matrix[0].length;
    let sumCol: number[] = [];
    for(let i = 0 ;i<rowLength; i++){
      let currentTotal = 0
      for(let j =0 ; j<colLength; j++){
        currentTotal += matrix[i][j]
      }
      sumCol.push(currentTotal)
    }
    return sumCol
  }

  function printSumColRow(matrix: twoWayArray): void{
    let rowSum = getRowSums(matrix);
    let colSum = sumColumns(matrix);
    alert(`row sum: ${rowSum} ++++++++++++ col sum: ${colSum}`)
  }

  function covertRowCol(matrix: twoWayArray): void{
  const result: twoWayArray =matrix[0].map((_,colIndex) =>
   matrix.map(row => row[colIndex])
   )
   alert(result)
  }

  function sumDiagonal(matrix: twoWayArray): void{
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    let n = matrix.length;
    for(let i=0;i< matrix.length;i++){
      mainDiagonal+=matrix[i][i];
      secondaryDiagonal+=matrix[i][n-1-i]
    }
    alert(`mainDiagonal: ${mainDiagonal} and secondaryDiagonal: ${secondaryDiagonal}`)
  }

  function createPascalPyramid(h: number): number[][]{
    const triangle:number[][] = [];
    for (let i =0;i<h;i++){
      const row: number[] =[]
      for(let j=0;j<=i;j++){
        if(j==0 || j==i){
        row.push(1)
        }else{
          const prevValue=triangle[i-1];
          const value = prevValue[j-1] + prevValue[j]
          row.push(value)
        }
      }
      triangle.push(row)
    }
    return triangle
  }
  function caculatePascal(matrix: twoWayArray): void{
    const h=matrix.length

    matrix.forEach((row,index)=>{
      const spaces = ' '.repeat(h - index);
      const numbers = row.join(' ');
      console.log(spaces + numbers);
    })
    
  }
  return (
    <>
    <button onClick={()=>basicMath(5,6)}>basicMath</button>
    <button onClick={helloWorld}>hello world</button>
    <button onClick={()=> {
      let result = findMinMax(5,6,7)
      alert(`Max number is ${result.max} and Min is ${result.min}`)
    }}>Find max and min</button>
    <button onClick={()=>{
        findLeapYear([2026,2027,2028,2029])
    }}>Find leap year</button>
    <button onClick={()=>findGradeStudent([6,4,5,7,8,6])}>Find Grade student</button>
    <button onClick={() => firstDegreeEquation(5,6)}>First Degree Equation</button>
    <button onClick={() => secondDegreeEquation(5,6,6)}>First Degree Equation</button>
    <button onClick={()=>{
      let result = convertCDegreeToFDegree(36)
      alert(`the result is ${result} *F`)
    }}>Convert C Degree to F Degree</button>
    -*<button onClick={()=> findTypeOfTriangle(3,5,4)}>find type of triangle</button>
    <button onClick={() => printNtoOneAndContrast(10)}>Print 1 to n</button>
    <button onClick={() => arraySum(10)}>Array Sum</button>
    <button onClick={() => arrayDuplicate(10)}>Array Duplicate</button>
    <button onClick={() => setSelectedDuplicationNumber(!selectedDuplicationNumber)
    }>Duplication Array</button>
    <button onClick={() => isPrimeNumber(5)}>Find prime number</button>
    <button onClick={() => isArrayPrimeNumber(20)}>Find array prime number</button>
    <button onClick={() => isPerfectSquare(4)}>Find perfectSquare</button>
    <button onClick={() => isPerfectNumber(6)}>Find perfect number</button>
    <button onClick={() => isFibonacci(10)}>find array fibonanci</button>
    <button onClick={() => handleUCLN_BCNN(48,18)}>find UCLN and BCNN</button>
    <button onClick={() => reverseArray(103)}>Reverse Array</button>
    <button onClick={() => findAllSumInNumber(103)}>Find All sum</button>
    <button onClick={() => findArray([5,4,3,2,1])}>show array</button>
    <button onClick={() => findMaxMinArray([5,4,3,2,1])}>find max and min in array</button>
    <button onClick={() => findEvenAndOdd([5,4,3,2,1])}>find even and odd</button>
    <button onClick={() => findXinArray([5,4,3,2,1,2],10)}>find x in array</button>
    <button onClick={() => bubbleSort([8,21,35,1,32,11,22])}>Sort with bubbleSort method</button>
    <button onClick={() => insertXinIndex([1,2,4,5,6],3,2)}>insert in array</button>
    <button onClick={() => deleteXinIndex([1,2,3,4],2)}>delete at index</button>
    <button onClick={() => isPalindrome([1,2,3,2,1,2])}>palindrome button</button>
    <button onClick={() => union2array([1,2,3],[4,5,6])}>combine button</button>
    <button onClick={() => countLetter("Hi 123")}>count letter</button>
    <button onClick={() => removeTrimAndUpperCaseFirstLetter(" get out here of me")}>remove and uppercase</button>
    <button onClick={() => checkReverseString("radar")}>check reverse string</button>
    <button onClick={() => countWord("hello")}>check count string</button>
    <button onClick={() => countName("Thomas Peter Griffin")}>check Name</button>
    <button onClick={() => checkSubString("hello word","hello")}>check sub string</button>
    <button onClick={() => palindromeString("hello")}>check palindrom string</button>
    <button onClick={() => findMaxChar("hello hello neo")}>check max char string</button>
    <button onClick={() => printArray([[1,2,3],[4,5,6]])}>print Array</button>
    <button onClick={() => printSumColRow([[1,2,3],[4,5,6]])}>print Array</button>
    <button onClick={() => covertRowCol([[1,2,3],[4,5,6]])}>covert Row Col</button>
    <button onClick={() => sumDiagonal([[1,2,3],[4,5,6],[7,8,9]])}>Sum array diagonal</button>
    <button onClick={() =>  caculatePascal(createPascalPyramid(5))}>Sum pyramid</button>
    







    


    

    {selectedDuplicationNumber && (
      () => {
        let result = multiplicationTable(5);
        return(
          <div>
            <ul>
              {result && result.map((numberTable, index)=>{
                return(
                  <li key={index}>5 * {index + 1} = {numberTable}</li>
                )
              })}
            </ul>
          </div>
        )
      }
    )()}
    </>
  )
}


export default PracticePage