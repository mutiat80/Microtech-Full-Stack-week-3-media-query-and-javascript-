console.log("Hello World");
console.log(2+3);
console.error("SOMETHING BREAK, WE ARE FIXING IT RIGHT AWAY");

const nama= "MUTIAT";
// console.log(nama);
const _city = "Lagos";
// console.log(_city);
let _myAge = 12;

console.log ("Hello, my name is " + nama + " , I live in " +_city + " and my age is " + _myAge);

 _myAge += 29;

//  console.log (nama + "" +_city + "" + _myAge);
console.log ("Hello, my name is " + nama + " , I live in " +_city + " and my age is " + _myAge);

 console.log(typeof "MUTIAT");
console.log(typeof 12);
console.log(typeof "Lagos");
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof function(){});
console.log(`My name is ${nama} , I live in ${_city} and I am ${_myAge} years old`);
console.log(nama.slice(3))
console.log(nama.length);



//switch case for grading system
 let score  = 55;

  let score_A = 75;
   let score_B = 60;
    let score_C = 50;
     let score_D = 45;
      let score_F = 39;

      if (score >= 100 || score < 0) {
    console.log("Invalid score");
}else{
    switch(true){
    case score >=70:
        console.log("you got A: excellent, you are a pro!")
    
    break;
       case score >=60:
        console.log("you got B : GOOD, not bad!")
    
    break;

       case score >=50:
        console.log("you got C: Average, try more!")
    
    break; 
    
    case  score >=45:
        console.log("you got D: pass, try better next time!")
    
    break;
       case  score >=39:
        console.log("you got F: this is a fail, are you here to play!")

    break;
    default:
        console.log(" you have no grade available at this time")

 }
}


//WEATHER APP USING if and else

    let temperature = 9;

if (temperature >= 40){
    console.log("The weather is hot today");
}else if(temperature >= 20){
    console.log("The weatheris moderate today");
}else if(temperature <= 10){
    console.log("it is freezzing cold today")
}else{
    console.log("No parameter set for today")
}

//TENARY OPERATOR


temperature = 40;

let weather = temperature >= 30 ? "the weather is hot" : temperature >=20 ? "the weather is cold" : "the weather is moderate";

console.log(weather);

 

