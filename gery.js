$(document).ready(function(){
	var cc=0;
	$("#gery").click(function(){
		++cc;
		if(cc>=3){
			$("#gery").html('<img src="images/gerysj.jpg" id="gery" width="30%" alt="Gery冒金光" />');
			$("#nb").html('妙妙妙');
		}
	});
});