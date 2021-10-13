$('#btn').click(function () {
    $('#e1').css('display', 'block');
})

//Formulaire connexion
const pseudoAdmin = "karen";
const mdpAdmin = "123";
var error = "Les informations sont erronés !";

function validateForm() {
    let pseudo = document.getElementById("pseudo").value;
    let mdp = document.getElementById("mdp").value;
    console.log(pseudo);
    console.log(mdp);
    if (pseudo === pseudoAdmin && mdp === mdpAdmin) {
        window.location.replace("https://jqntn.github.io/CyberGame/panelAdmin.html");
    }else{
        document.getElementById("msgError").innerHTML = error;  
    }
}