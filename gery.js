$(document).ready(function(){
	var cc=0;
	$("#gery").click(function(){
		++cc;
		if(cc>=3){
			document.getElementById('gery').innerHTML='<img src="images/gerysj.jpg" id="gery" width="30%" alt="Gery冒金光" />';
			document.getElementById('nb').innerHTML='妙妙妙';
		}
	});
});