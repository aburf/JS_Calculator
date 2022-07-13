
calcArr = []
operators = ['+','-','*','/']
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
      console.log(typeof clickInput);

      calcArr.push(event.target.innerHTML);
      //console.log(calcArr);
      let calcDisplay = document.getElementById('output')
      calcDisplay.textContent = calcArr.join('');

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
      calcArr.push(event.target.innerHTML);
      console.log(calcArr)
    });
  });
  
};


operate();

*/





