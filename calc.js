
let calcArr1 = [];
let calcArr2 = [];
let operator = "";
let operators = ['+','-','*','/','='];
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
      //This function will estalbish values for the current input, adjust the calculator
      //display, and make calculations that cycle between both arrays in perpetuity    
      let clickInput = event.target.innerHTML;
      let calcDisplay = document.getElementById('output')

      ////////////////////////////////////////////////////////
      //AC take precedent over everything
      ////////////////////////////////////////////////////////
      if(clickInput === "AC"){
        calcArr1 = [];
        calcArr2 = [];
        operator = "";
        calcDisplay.textContent = "0";
      }

      ////////////////////////////////////////////////////////
      //must start with valid number input to initiate calc on init Array
      ////////////////////////////////////////////////////////
      else{
          if(calcArr1.length === 0){
            if(isNumber(clickInput) || clickInput ==="."){
              calcArr1.push(clickInput);
              calcDisplay.textContent = calcArr1.join('');
            }
            else {
              calcDisplay.textContent = "Start with a number";
            }
          }

          ////////////////////////////////////////////////////////
          //if number already started, then continue adding numbers to it,
          //or break to operate if operator newly added
          ////////////////////////////////////////////////////////
          else if (calcArr1.length > 0 && operator === ""){
            if(isNumber(clickInput) || clickInput ==="."){
              calcArr1.push(clickInput);
              calcDisplay.textContent = calcArr1.join('');
            }
            else {
              operator = clickInput;
              calcDisplay.textContent = calcArr1.join('')+operator;
            }
          }

          ////////////////////////////////////////////////////////
          ////when calcArr2 has not yet been established we can either start it or change operators
          ////////////////////////////////////////////////////////
          else if (calcArr1.length > 0 && operator != "" && calcArr2.length === 0 ){
            if(isNumber(clickInput) || clickInput ==="."){
              calcArr2.push(clickInput);
              calcDisplay.textContent = calcArr2.join('');
            }
            //allow user to change their operator if no new number added
            else {
              operator = clickInput;
              calcDisplay.textContent = calcArr1.join('')+operator;
            }
          }

          ////////////////////////////////////////////////////////
          ////when calcArr2 exists we can add to it or calculate
          ////////////////////////////////////////////////////////
          else if (calcArr1.length > 0 && operator != "" && calcArr2.length > 0 ){
            if(isNumber(clickInput) || clickInput ==="."){
              calcArr2.push(clickInput);
              calcDisplay.textContent = calcArr2.join('');
            }
            //if Array2 already has a value and the use inputs another operator, we calculate with current operator
            else {//(operators.includes()){
              let tempVal = 0;
              switch (operator){
                ///['+','-','*','/',"="]
                case "+":
                  tempVal = parseFloat(calcArr1.join('')) + parseFloat(calcArr2.join(''));
                  break;
                case "-":
                  tempVal = parseFloat(calcArr1.join('')) - parseFloat(calcArr2.join(''));
                  break;
                case "*":
                  tempVal = parseFloat(calcArr1.join('')) * parseFloat(calcArr2.join(''));
                  break;
                case "/":
                  tempVal = parseFloat(calcArr1.join('')) / parseFloat(calcArr2.join(''));
                  break;
              }

              calcDisplay.textContent = tempVal;
              calcArr1 = [tempVal];
              calcArr2 = [];
              operator = clickInput;
            }
            } 
          } ///ends the else statement after the "AC" if statement
    console.log(isNumber(clickInput));

    console.log("CalcArr1: "+calcArr1)
    console.log("calcArr2: "+calcArr2)
    console.log("operator: "+operator)
    }) ///end event log function
      
  }

}

operate()


