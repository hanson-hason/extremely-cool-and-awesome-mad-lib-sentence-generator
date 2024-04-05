
// Pizza order by Pranav

// Place an Event Listener to the button to run the placeOrder function

document.getElementById("btn").addEventListener("click", greet);
// Store order code in a function
function greet() {
  //Input - extremely cool and awesome
  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  let noun = document.getElementById("noun").value;
  let adjective = document.getElementById("adjective").value;

  //Process - Create confirmation message using template strings

  let message = `the extremely cool and awesome sentence you have generated is: "Yesterday, ${name} went to Somalia and bought ${number} ${adjective} ${noun}."`;

  


                                                                                                                                  
                                                                                                                                                                                                        
                                                                                                                                                                                                        
                                                                                                          

  //Output
  document.getElementById("output").innerHTML = message;
}
