$(document).ready(function(){
	$("#viewfld2").click(function(){
				$.post("http://roadfloodph.cloudapp.net/roadfloodph/selectAllData.php", {emailAddress: "public"}, function(json){
				console.log(json);
				
				$(".floodheight").html(json.roadFloodLevel1);
					
				});
	});
	$("#select-location").change(function(){
				var select = $(this).val();
				$.post("http://roadfloodph.cloudapp.net/roadfloodph/selectAllData.php", {emailAddress: "public"}, function(json){
				console.log(json);
				if(select == "Pureza, Sta. Mesa, Manila"){
					$(".floodheight").html(json.roadFloodLevel1);
				}else{
					$(".floodheight").html(json.roadFloodLevel2);
				}
				
	});
	});
	
	

});