$('#btn').click(function () {
    $('#e1').css('display', 'block');
})

//Test d'entrée dans le jeu
const codeSecret = 830;
function codeEntrer() {
    let code = document.getElementById("code").value;
    if (code === codeSecret) {
        window.location.replace("https://jqntn.github.io/CyberGame/etape1.html");
    }else{
        document.getElementById("msgCodeError").innerHTML = error;  
    }
}

//Formulaire connexion
const pseudoAdmin = "karen";
const mdpAdmin = "123";
var error = "Les informations sont erronés !";

function validateForm() {
    let pseudo = document.getElementById("pseudo").value;
    let mdp = document.getElementById("mdp").value;
    if (pseudo === pseudoAdmin && mdp === mdpAdmin) {
        window.location.replace("https://jqntn.github.io/CyberGame/panelAdmin.html");
    }else{
        document.getElementById("msgError").innerHTML = error;  
    }
}