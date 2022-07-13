
let calcArr1 = [];
let calcArr2 = [];
let operator = "";
//let operators = ['+','-','*','/'];
//identify all buttons
  var allButtons = document.getElementsByTagName('button');
  console.log(allButtons);
  

//for taking click input and differentiating between numbers
function isNumber(str) {
  if (typeof str != "string") return false // we only process strings!
  // could also coerce to string: str = ""+str
  return !isNaN(str) && !isNaN(parseFloat(str))
}


//Add click event listener for all buttons
function operate(){
  for(i = 0; i < allButtons.length;i++) {
    allButtons[i].addEventListener('click', function (event) {
      //console.log(event.target.innerHTML);
      

      let clickInput = event.target.innerHTML;
      
      let calcDisplay = document.getElementById('output')

      //AC take precedent over everything
      if(clickInput === "AC"){
        calcArr1 = [];
        calcArr2 = [];
        operator = "";
        calcDisplay.textContent = "0";
      }
      //must start with valid number input to initiate calc on init Array
      else{
          if(calcArr1.length === 0){
            if(isNumber(clickInput)){
              calcArr1.push(clickInput);
              calcDisplay.textContent = calcArr1.join('');
            }
            else {
              calcDisplay.textContent = "Start with a number";
            }
          }
          //if number already started, then continue adding numbers to it,
          //or break to operate if operator newly added
          else if (calcArr1.length > 0 && operator === ""){
            if(isNumber(clickInput)){
              calcArr1.push(clickInput);
              calcDisplay.textContent = calcArr1.join('');
            }
            else {
              operator = clickInput;
              calcDisplay.textContent = calcArr1.join('')+operator;
            }
          }
          //////////////////////////////
          //////////////////////////////
          //////////////////////////////
          /*
          else if (calcArr1.length > 0 && operator === ""){
            if(isNumber(clickInput)){
              calcArr1.push(clickInput);
              calcDisplay.textContent = calcArr1.join('');
            }
            else {
              operator = clickInput;
              console.log(operator);
            }
          }
          */

    }

      console.log(isNumber(clickInput));

      
      //console.log(calcArr1);
      
      //calcDisplay.textContent = calcArr1.join('');

      })
      
  }

}

operate()

/*
function operate(){
  var allButtons = document.getElementsByTagName('button');

  allButtons.forEach(btn => {
    btn.addEventListener('click', function clickEvent(event) {
      console.log(event.target.innerHTML);
      calcArr1.push(event.target.innerHTML);
      console.log(calcArr1)
    });
  });
  
};


operate();

*/





