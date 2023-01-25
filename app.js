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

