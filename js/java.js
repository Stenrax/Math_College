var navbar = document.getElementById("MenuClasse");
var sticky = navbar.offsetTop;
MaJDate();
StayHide();
window.onscroll = function() {
	StickyMenu()
	if ((window.innerHeight + window.pageYOffset + 1) >= document.body.offsetHeight) {
        document.getElementById("GoToEx").style.transform = "translateY(-2.5vh) scale(1,1.5)";
        document.getElementById("GoToExTxt").style.transform = "scale(1.5,1)";
		setTimeout(function(){ document.getElementById("GoToExTxt").style.transform = ""; document.getElementById("GoToEx").style.transform = "" }, 400);
		}
	};
function GetCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function StickyMenu() {
	if (window.pageYOffset >= sticky){
		navbar.classList.add("Sticky")
		}
	else {
		navbar.classList.remove("Sticky");
		}
	};
function HideMenu() {
	document.getElementById("HideMenuButton").classList.toggle("SandwichToCross");
	document.getElementById("MenuChapitre").classList.toggle("HideMenu");
	document.getElementById("FondHMB").classList.toggle("HideMenu");
	var nbrarticle=document.getElementsByTagName('article').length;
	if(nbrarticle !== null)
		{
		for (let i = 0; i < nbrarticle; i++)
			{
			document.getElementsByTagName('article')[i].classList.toggle("Fullscreen");
			}
		}
	if(document.getElementById("BoutonPDF1") !== null)
		{
		var IconePDF1 = document.getElementById("BoutonPDF1");
		if(IconePDF1.style.opacity == '1')
			{
			IconePDF1.style.opacity = '0.99';
			IconePDF1.style.transform = "";
			}
		else
			{
			IconePDF1.style.opacity = '1';
			IconePDF1.style.transform = 'translateX(+10vw)';
			}
		}
	var nbrfooter = document.getElementsByTagName('footer').length;
	if(nbrfooter !== null)
		{
		for (let i = 0; i < nbrfooter; i++)
			{
			document.getElementsByTagName('footer')[i].classList.toggle("Fullscreen");
			}
		}
	if (GetCookie("WasCached")==0 ||  GetCookie("WasCached")== ""){
		document.cookie = "WasCached=1; path=/";
		}
	else {
		document.cookie = "WasCached=0; path=/";
		}
	}
function StayHide() {
	if (GetCookie("WasCached")==1){
		document.getElementById("HideMenuButton").classList.add("Quick");
		document.getElementById("HideMenuButton").classList.toggle("SandwichToCross");
		document.getElementById("Cours").classList.add("Quick");
		document.getElementById("Cours").classList.toggle("Fullscreen");
		document.getElementById("MenuChapitre").classList.add("Quick");
		document.getElementById("FondHMB").classList.add("Quick");
		document.getElementById("MenuChapitre").classList.toggle("HideMenu");
		document.getElementById("FondHMB").classList.toggle("HideMenu");
		document.getElementsByTagName('footer')[0].classList.add("Quick");
		document.getElementsByTagName('footer')[0].classList.toggle("Fullscreen");
		setTimeout(function(){  
			document.getElementById("HideMenuButton").classList.remove("Quick");
			document.getElementById("Cours").classList.remove("Quick");
			document.getElementById("MenuChapitre").classList.remove("Quick");
			document.getElementById("FondHMB").classList.remove("Quick");
			document.getElementsByTagName('footer')[0].classList.remove("Quick");
			}, 450);
		}
	}
function Corrige(x) {
	document.getElementsByClassName("Enonce")[x].classList.toggle("CacherEnoncer");
	document.getElementsByClassName("Correction")[x].classList.toggle("MontrerCorrection");
	}
function NomDeChapitre(x) {
	var objet = document.getElementById("MenuChapitre").children[x];
	var dim = objet.getBoundingClientRect();
	var etiquette = document.getElementById("Etiquettes").children[x];
	etiquette.style.top = eval(100*dim.top/window.innerHeight) + 'vh';
	etiquette.style.right = eval(100-100*dim.left/document.body.clientWidth-20) + 'vw';
	if(etiquette.style.opacity == '1')
		{
		etiquette.style.opacity = '0';
		etiquette.style.transform = "translateX(+20vw)";
		}
    else
		{
        etiquette.style.opacity = '1';
		etiquette.style.transform = 'translateX(-20vw)';
		}
	}
function GoEx(){
	document.getElementById("Cours").style.transform="translateY(-100vh)";
	document.getElementById("GoToEx").style.transform="translateY(-100vh)";
	document.getElementById("Exercices").style.display="block";
	document.getElementById("GoToCours").style.display="block";
	setTimeout(function()
		{ 
		document.getElementById("Cours").style.display = "none"; 
		document.getElementById("GoToEx").style.display = "none";	
		document.getElementById("Exercices").style.transform="scale(1,1)"; 
		document.getElementById("GoToCours").style.transform="scale(1,1)";
		}, 400);
	}
function MaJDate(){
	var l = document.getElementsByTagName("time").length;
	if (l !==0)
		{
		for (let i = 0; i < l; i++)
			{
			document.getElementsByTagName("time")[i].innerHTML = "Le 27 Mars 2021"
			document.getElementsByTagName("time")[i].datetime = "2021-03-27"
			}
		}
	}