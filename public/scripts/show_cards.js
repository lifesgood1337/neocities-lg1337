let item = 0;
const itemLim = document.getElementsByClassName("card").length;

const showTimer = setInterval(function(){
	if (content.style.visibility == "visible") {
		if (item < itemLim) {
			document.getElementsByClassName("card")[item].style.maxHeight = "max-content";
			document.getElementsByClassName("card")[item].style.opacity = 1;
			item++;
		} else { clearInterval(showTimer); }
	}
}, 350);
