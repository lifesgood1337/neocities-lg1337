  let intro_text	  = document.getElementById("intro-text");
const intro_theme	  = document.getElementById("intro-theme");
const intro_theme_header  = document.getElementById("intro-theme-header");
const intro_theme_select  = document.getElementById("intro-theme-select");
const intro_theme_remind  = document.getElementById("intro-theme-reminder");
const intro_submit	  = document.getElementById("intro-theme-submit");
const content		  = document.getElementById("content");
let   savedTheme	  = localStorage.getItem("user-theme");


let introCtr = 0;

function intro_op(e, s){
	e.style.opacity = (s?1:0);
}

function intro_vis(e, s){
	e.style.maxHeight = (s?"100%":0);
	e.style.visibility = (s?"visible":"hidden");
	s?"":e.remove();
}

const intro = setInterval(function(){

	if (introCtr == 1) {
		savedTheme = localStorage.getItem("user-theme");

		if (savedTheme){
			document.documentElement.setAttribute("data-theme", savedTheme);
			
			 intro_op(intro_theme, false);
			intro_vis(intro_theme, false);
		}

		intro_vis(intro_text, true);
		 intro_op(intro_text, true);
	}

	if (introCtr == 5) {
		 intro_op(intro_text, false);

		if (savedTheme){
			introCtr = 8;
		}
	}

	if (introCtr == 7) {
		intro_vis(intro_text, false);
		intro_vis(intro_theme, true);
		intro_vis(intro_theme_header, true);
		 intro_op(intro_theme, true);
		 intro_op(intro_theme_header, true);

		intro_submit.addEventListener("click", function(){
			
			const selectedTheme = "copper";
			localStorage.setItem("user-theme", selectedTheme);

			intro_op(intro_theme_header, false);
		 	intro_op(intro_theme_select, false);

			let j = 0;

			let selector = setInterval(function(){
				if (j == 2){
					intro_vis(intro_theme_header, false);
					intro_vis(intro_theme_select, false);
					intro_vis(intro_theme_remind, true);
					 intro_op(intro_theme_remind, true);
				}

				if (j == 5){
					 intro_op(intro_theme_remind, false);
				}


				if (j >= 7){
					intro_vis(intro_theme, false);
					intro_vis(content, true);
					intro_op(content, true);

					content.style.maxHeight = "min-content";
					content.style.overflow = "auto";
					clearInterval(selector);
				}

				j++
			}, 1000);
		});

introCtr++;
	}

	if (introCtr > 8) {
		if (savedTheme){
			intro_vis(intro_text, false);
			intro_vis(content, true);
			 intro_op(content, true);

			content.style.maxHeight = "min-content";
			content.style.overflow = "auto";
		} else {
			intro_vis(intro_theme_select, true);
			 intro_op(intro_theme_select, true);
		}

		clearInterval(intro);
	}

	introCtr++;
},1000);
