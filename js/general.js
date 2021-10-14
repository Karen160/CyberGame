//bouton snake
$('#btnSnake').click(function () {
    $('.e3').css('display', 'block');
    $('.msgSnake').css('display', 'block');
});

//Test d'entrée dans le jeu
const codeSecret = "830";
function codeEntrer() {
    let code = document.getElementById("code").value;
    if (code === codeSecret) {
        window.location.replace("etape1.html");
    }else{
        document.getElementById("msgCodeError").innerHTML = error;  
    }
}

//Formulaire connexion
const pseudoAdmin = "daemon";
const mdpAdmin = "873";
var error = "Les informations sont erronés !";

function validateForm() {
    let pseudo = document.getElementById("pseudo").value;
    let mdp = document.getElementById("mdp").value;
    if (pseudo === pseudoAdmin && mdp === mdpAdmin) {
        window.location.replace("panelAdmin.html");
    }else{
        document.getElementById("msgError").innerHTML = error;  
    }
}

//Bouton illimité
const motAdmin = "illimité";
function motEtape3() {
    let mot = document.getElementById("mot").value;
    if (mot === motAdmin) {
        $('.e3').css('display', 'block');
        $('.msgSnake').css('display', 'block');
    }else{
        $('.msgError').css('display', 'block');
    }
}