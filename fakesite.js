
setTimeout(function() {

	var myModal = document.getElementsByClassName('modal')[0];

    	myModal.style.display = "inline"
    
  }, 3000);



function close () {

document.getElementsByTagName("button").addEventListener("onclick", close)

	var exit = document.getElementsByClassName('modal')[0];

	exit.style.display = "none"

}