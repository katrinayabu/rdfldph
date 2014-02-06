$(document).ready(function(){
	$("#submit").click(function(){
			var adminUsername = $("#un").val();
			var adminPassword = $("#pw").val();
			$("#adminLoginMsg").hide();


			if(adminUsername != "" && adminPassword != ""){
				$.post("http://roadfloodph.cloudapp.net/roadfloodph/admin.php", {username: adminUsername, password: adminPassword}, function(json){
					if(json.query){
						$("#un").text(json.username);
						console.log(json.username);
						$("#pw").append('<b class="caret">');
					}
					else{
						$("#adminLoginMsg").text("Your username and password is not found in the list of Admins.");
						$("#adminLoginMsg").show();
						$("#un").focus("");
					}
				});
			}
			else{
				$("#adminLoginMsg").show();
				$("#adminLoginMsg").text("Please do not leave any fields blank.");
			}
		});
	});