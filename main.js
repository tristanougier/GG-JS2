let bouton = document.getElementById('bouton-afficher');
bouton.onclick = function ()
{
	document.getElementById('bloc-central').style.display='flex';
	document.getElementById('bouton-afficher').style.display='none';
};

document.getElementById('bouton_recherche').onclick=function()

{
let texte = document.getElementById('input').value;
document.getElementById('bouton_recherche').href = "https://www.google.com/fr#q=" + texte;

}

setTimeout(function(){ alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please"); },10000);