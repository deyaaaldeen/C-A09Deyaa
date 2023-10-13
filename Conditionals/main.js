/* START CODE UNDER THIS LINE */
//Q1
if(10<=10){
 
}
if(5<3){
 
}
if(5<10){
    
}else{
  
}


if(2<3 && 7>10){

}
if("hello"==="hello"){
    
}
//Q2
true && true && false//false
// اذا كانت واحدة false مع and  تكون النتيجة دائما false
true || (true && false)//true
/* الاولوية للاقواس true || false بتعطي false 
وفي حالة || اذا كانت واحدة true تكون النتيجة فقعث
*/
5 === 2 || 1 < 10 //true
/*5===2 false 1<10 true 
  false || true 
  في حالة or اذا كانت احدهم true تكون النتيجة النهائية true
  */

 /*(!false && true) || (!true && true);// true 
 /* !false لا  تساويfalse الجواب true 
 true && true لايوجد لدينا false الجواب يكون true 
 !false معناها لا تساوي false تكون true 
   true && true الجواب true 
   true || true الجواب النهائي true
*/ 
//Q3
const legalAge= function (age ) {
    if (age>=18){
        console.log("true")
    }else(
        console.log("false")
    )
}
//Q4
const isItMyName=function (name){
 if (name==="john")
 {
    console.log(true)
 }else 
 {
    console.log(false)
 }

}
//Q5
const positiveOrNegative=function(number){
    if (number < 0)
    {
        console.log("the number is negative:"+number)
    }else if(number >=1)
    console.log("the number is positive:"+number)
     else{
        console.log("the number is neutral:"+number)
     }
}
//practice
//Q1

const toLowerOrUpperCase = function(string,strCase){
if (string===string.toLowerCase() && strCase==="Upper" )
{
   console.log(string.toUpperCase() )

}
 else if(string===string.toUpperCase() &&strCase==="Lower")

console.log(string.toLowerCase())
else(console.log("String case must be lower or upper")) 
}
//Q2
const howLong = function(word){
    if(word.length<=5){
        console.log("short words")
    }else if(word.length > 5 && word.length <= 8)
    console.log("medium words")
    else if(word.length > 9 && word.length <= 13)
    console.log("long words")
    else
    console.log("very long")
}
//Q4

const startsWith = function (string, character) {
    if(character===string.toLowerCase()[0])
    console.log(true)
     else if(character===string.toUpperCase()[0])
     console.log(true)
      else (console.log(false))
  };
  //Q5
const endsWith = function (string, character) {
    if(character===string.charAt(string.length-1)  && string.toLowerCase())
    console.log(true)
     else if(character===string.charAt(string.length-1) && string.toUpperCase())
     console.log(true)
      else (console.log(false))
};
//Q6
const oddOrEven = function (number) {
    if(number% 2 === 1)
    console.log(number +" is odd")
     else  console.log(number+ " number is even ")
  };
//Q7
const stringCase = function (string) {
    if (string === string.toLowerCase())
       console.log("all lower case")
      else if (string === string.toUpperCase())
      console.log("all Upper case")
      else (console.log("mix case"))
  };
  //Q8
  const isLeapYear = function (year) {
    if(year%400 ===0 || year%100 !=0 && year%4 ===0  )
     console.log(true)
     else if (year%100 ===0 || year%100 !=0 )
     console.log(false)
    else("no")
      
  };
  //Q9
  const login_v01 = function (username, password) {
    if(username.length > [6] && password.length >= [8])
    console.log("login successful")
      else(console.log("login failed"))
    
  };
  //Q10
  const login_v02 = function (username, password) {
    if(username.length > [6] && password.length >= [8] && 
    username==="JOHN_DOE" && password ==="koljgwEA")
    console.log("login successful")
    else if( username=== "jane_doe" &&password==="12345678"
    )
    console.log("login successful")
      else(console.log("login failed"))
  }
  //Q11
  const login_v03= function (username, password) {
    if(username.length > [6] && password.length >= [8] && 
    username==="JOHN_DOE" && password ==="koljgwEA" && username.toUpperCase() ||username.toLowerCase())
    console.log("login successful")
     else if  ( username==="jane_doe" && password==="12345678" && username.value.length > [6])  
         console.log("username must be more than 6 characters long")
      else(console.log("login Failb"))
  }

  //Advanced Practice
  //Q1
  const letterInString = function (string, letter) {
    if(string.includes(letter))
    console.log(true)
     else(console.log(false))
  };
//Q2
const guessTheSquareRoot = function (number, squareRoot) {
    if(number===(Math.pow(squareRoot)))
    console.log("correcet")
    else(console.log("uncoe"))
  };