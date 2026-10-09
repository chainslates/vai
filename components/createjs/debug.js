	let screens = [
		"main_menu",
		"screen_0",	
		"screen_police",
		"screen_map",
		"screen_prison",
		"screen_tattoo",
		"screen_gym",
		"screen_lawyer", 
		"screen_sex_1",
		"screen_mansion",
		"screen_apartments",
		"screen_sex_0",
		"screen_sex_2",
		"screen_scenes",
	];

let div = `
<style>
.screen_item.selected
{
	color:#ffcc66 !important;
}
.screen_item
{
	cursor: pointer;
}
.screen_item:hover
{
	text-decoration: underline;
}
#debugger
{
	overflow:auto;
	max-height:100%;
}
#screen_list
{
	overflow:auto;
	max-height:80%;
}
</style>

<div id="debugger" style="position: absolute; left:0;top:0;min-width:4rem;min-height:10%;background:rgba(0, 0, 0, 0.3);z-index:10000;color:white;padding-left:0.5rem;padding-right:0.5rem;text-align:center;display:none">

<div id="screen_list">
</div>

</div>

`;

document.body.insertAdjacentHTML('beforeend', div);

	let tag = '';
	for(let s of screens)
	{
		tag+=`<h4 class="screen_item" data-name="${s}" >${s}</h4>`;
	}

	document.getElementById('screen_list').innerHTML=tag;

	document.addEventListener('click',function(e){
	    if(e.target && exportRoot!=undefined && exportRoot.current_screen_name!=undefined && e.target.classList.contains('screen_item')){
	    	document.getElementsByClassName('selected')[0].classList.remove('selected');
	    	e.target.classList.add('selected');
	    	 createjs.Sound.stop();
 			 exportRoot.setScreen(e.target.dataset.name)
	     }
 	});


	document.addEventListener('keydown', logKey);

	function logKey(e) {

		if(e.key==" ")
		{
			if(exportRoot!=undefined  && exportRoot.current_screen_name!=undefined)
			{
				let x = document.getElementById('debugger');

				if(x.style.display === "none")
				{
					let nodeToSelect = undefined; 

					for(let node of document.getElementsByClassName('screen_item'))
					{
						node.classList.remove('selected');
						if(node.dataset.name==exportRoot.current_screen_name)
						{
							nodeToSelect = node;
						}
					}

					nodeToSelect.classList.add('selected');
				}

				
				x.style.display === "none" ? x.style.display="block" : x.style.display="none";
			}	
		}
	}