
calcArr = []

//identify all buttons
  var allButtons = document.getElementsByTagName('button');
  console.log(allButtons);
  


//Add click event listener for all buttons
function operate(){
  for(i = 0; i < allButtons.length;i++) {
    allButtons[i].addEventListener('click', function (event) {
      console.log(event.target.innerHTML);
      calcArr.push(event.target.innerHTML);
      console.log(calcArr);
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





