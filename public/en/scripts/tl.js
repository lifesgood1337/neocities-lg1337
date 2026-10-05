const tl_len = 1;

setTimeout(function(){
	for (let i = 0; i < tl_len; i++){
		let ch = document.createElement("div");
		ch.innerHTML = `<div>
					<i class=\"bi bi-circle-fill\" style=\"font-size: 1.5em;\"> ####</i>
					<p class=\"timeline-slot\ mt-2 ms-2 px-3 py-2">Test item</p>
				</div>`;

		document.getElementById("timeline").appendChild(ch);
	}
}, 200);
