// Iteration 1: Names and Input

let hacker1 = "Aymeric";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Lauren";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if(hacker2.length < hacker1.length){
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else{
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let newDriversName = "";
let currentLetter;
for(let i = 0; i < hacker1.length; i++){
    currentLetter = hacker1[i].toUpperCase();
    newDriversName += currentLetter + " ";
}




let newNavigatorsName = "";
let newLetter;
for(let i = hacker2.length; i > 0 ; i-- ){
    newLetter = hacker2[i-1];
    newNavigatorsName += newLetter;
}
console.log(newNavigatorsName);



if(hacker1.length <= hacker2.length){

    for(let i = 0; i < hacker1.length; i++){
        if(hacker1[i] < hacker2[i]){
            console.log('The drivers name goes first.');
            break;
        }
        else if(hacker1[i] > hacker2[i]){
            console.log('Yo, the navigator goes first definitely.');
            break;
        } else {
            if (i === hacker1.length-1) {
                console.log('what?! You both have the same name')
            }
        }
}
}
else{
    for(let i = 0; i < hacker2.length; i++){
        if(hacker1[i] < hacker2[i]){
            console.log('The drivers name goes first.');
            break;
        }
        else if(hacker1[i] > hacker2[i]){
            console.log('Yo, the navigator goes first definitely.');
            break;
        } else {
            if (i === hacker2.length-1) {
                console.log('what?! You both have the same name')
            }
        }
}
}