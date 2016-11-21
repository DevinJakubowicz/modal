
setTimeout(function() {

	var myModal = document.getElementsByClassName('modal')[0];

    	myModal.style.display = "inline"
    
  }, 3000);


function close () {

document.getElementByTagName("button").addEventListener("click", close);

document.getElementsByClassName("modal")[0].style.display = "none"

}
