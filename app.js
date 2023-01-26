var imgApp = document.querySelector('#app');

function changeToBlue(){
    document.getElementById("umbrellaImage").src = './assets/img/Blue umbrella.png';
}

function changeToPink(){
    document.getElementById("umbrellaImage").src = './assets/img/Pink umbrella.png';
}

function changeToYellow(){
    document.getElementById("umbrellaImage").src = './assets/img/Yello umbrella.png';
}




document.getElementById('imageUpload').addEventListener('change', readURL, true);
function readURL(){
	// var s = document.querySelectorAll(".loader").style;
	// s.opacity = 1;
	
	// document.querySelectorAll(".loader").fadeOut("1000");
    $("#umbrellaImage").addClass("defaultViewLoader")
    $("#mainLogo").addClass("defaultViewLoader")
    $(".loader").removeClass('defaultViewLoader').attr("value",""); 
    $(".loader").addClass('button_loader').attr("value","");
    window.setTimeout(function(){
        $('.loader').removeClass('button_loader').attr("value","\u2713");
        $(".loader").addClass('defaultViewLoader').attr("value","");
        $('.loader').prop('disabled', true);
        $("#umbrellaImage").removeClass("defaultViewLoader")
        $("#mainLogo").removeClass("defaultViewLoader")
      }, 3000);
    const file = document.getElementById("imageUpload").files[0];
    const reader = new FileReader();
    reader.onloadend = function(){
        document.getElementById('clock').style.backgroundImage = "url(" + reader.result + ")";        
    }
    if(file){
		// (function fade(){(s.opacity-=.1)<0?s.display="none":setTimeout(fade,40)})();
        reader.readAsDataURL(file);
    }else{
		
    }
}

