function scuberGreetingForFeet(ride){
  // Write your code here!
  let price;
 if (ride <= 400) {
  price = 'This one is on me!';
 } else if (ride > 2000 && ride <= 2500) {
  price = 'I will gladly take your thirty bucks.'
 } else if (ride > 2500) {
  price = 'No can do.';
 }
 return price;

}

function ternaryCheckCity(city) {
  // Write your code here!
  let reply;
  if (city === "NYC" ) {
    reply = "Ok, sounds good.";
  } else  {
    reply = "No go.";
  }
    return reply;
  
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
let byeMessage;
if (tip === "generous") {
  byeMessage = "Thank you so much."
} else if (tip === "not as generous") {
  byeMessage = "Thank you."
} else {
  byeMessage = "Bye."
}
  return byeMessage;
}