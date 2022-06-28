

  var allButtons = document.getElementsByTagName('button');
  console.log(allButtons);
  
  /*
  for(i = 0; i < allButtons.length;i++) {
    allButtons[i].addEventListener('click', function(){
      console.log("gubba "+ allButtons[i]);
    });
  }
*/
for(i = 0; i < allButtons.length;i++) {
  allButtons[i].addEventListener('click', function (event) {
    console.log(event.target.innerHTML);
    })
}