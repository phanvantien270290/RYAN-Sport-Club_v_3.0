
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	
	var currentHeight= document.getElementById("navbar").clientHeight;//height of menu 
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navbar").style.right = "0";
	} else {
		document.getElementById("navbar").style.right = "100%";
	}
	prevScrollpos = currentScrollPos;
}



function changeicon(){
	var  attr =$('#searchbox').attr('aria-expanded');
	//var btnsearh =$('button').attr("data-target");
	////alert(btnsearch);
	if (attr=='true')
		$('button[data-target="#searchbox"]>span').addClass('fa-search').removeClass('fa-close');
	
	else
		$('button[data-target="#searchbox"]>span').removeClass('fa-search').addClass('fa-close');
}