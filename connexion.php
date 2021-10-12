<?php include('inc/head.php'); 

$pseudoAdmin = "karen";
$mdpAdmin = "123";
$error = "";

// Récupération des données lors de la validation du formulaire
if(isset($_POST['pseudo']) && isset($_POST['mdp'])){
    $pseudo = $_POST['pseudo'];
    $mdp = $_POST['mdp'];

    if($pseudo === $pseudoAdmin && $mdp === $mdpAdmin){?>
        <script> window.location.replace("https://jqntn.github.io/CyberGame/panelAdmin.php");</script>
    <?php }else{
        $error = "<div class='alert'><i class='fas fa-exclamation-circle'></i> Informations incorrects</div>";
    }
}
?>

<main>
    <h2>Connexion de l'administrateur</h2>
    <form method="post" class="formConnexion">
        <label for="pseudo">Pseudo</label>
        <input type="text" name="pseudo" class="champ" required>
        <br><br>
        <label for="mdp">Mot de passe</label>
        <input type="password" name="mdp" class="champ" required>
        <br><br>
        <button type="submit" name="connexion" class="envoyer">Se connecter</button>
        <?php echo $error ?>
    </form>
</main>

<?php include('inc/footer.php') ?>