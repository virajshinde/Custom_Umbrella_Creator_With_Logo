
// Main function to show Loader on change in Color or Logo Input 
function loaderIcon(){
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
}

//Individual functions to change color of umbrella
function changeToBlue(){
    loaderIcon()
    document.getElementById("umbrellaImage").src = './assets/img/Blue umbrella.png';
}

function changeToPink(){
    loaderIcon()
    document.getElementById("umbrellaImage").src = './assets/img/Pink umbrella.png';
}

function changeToYellow(){
    loaderIcon()
    document.getElementById("umbrellaImage").src = './assets/img/Yello umbrella.png';
}



//Set a onChange listener to file upload and invoke readURL Function
document.getElementById('imageUpload').addEventListener('change', readURL, true);

//Main function to upload Image.
function readURL(){
	  loaderIcon()
    const file = document.getElementById("imageUpload").files[0];
    const reader = new FileReader();
    reader.onloadend = function(){
        document.getElementById('clock').style.backgroundImage = "url(" + reader.result + ")";        
    }
    if(file){
		
        reader.readAsDataURL(file);
    }else{
		
    }
}

