
// PLF - http://www.jejavascript.net/
var date_du_jour, heure, minute;
var tex= "http://www.jejavascript.net"
var dos="rev/"

document.write('<a href="http://www.jejavascript.net/reveil.php" target="_blank" ><img src="rev/0.gif" name="im1" border="0" alt=',tex,' ><img src="rev/1.gif" name="im2" border="0" alt=',tex,'><img src="rev/p.gif" width="7" height="21" alt=',tex,' border="0"><img src="rev/2.gif" name="im3" border="0" alt=',tex,'><img src="rev/3.gif" name="im4" border="0" alt=',tex,'></a>');
	document.im1.src = dos+"4.gif";
	document.im2.src = dos+"5.gif";
	document.im3.src = dos+"6.gif";
	document.im4.src = dos+"7.gif";
	document.im1.src = dos+"8.gif";
	document.im2.src = dos+"9.gif";
function changer_jjs() {
		date_du_jour = new Date();
		heure = date_du_jour.getHours();
		minute = date_du_jour.getMinutes();
		if (heure<10) heure="0"+heure;
		if (minute<10) minute="0"+minute;
		heure = heure+" ";minute = minute+" "
		heur1=heure.charAt(0);
		heur2=heure.charAt(1);
		min1=minute.charAt(0);
		min2=minute.charAt(1);
       document.im1.src = dos+heur1+".gif";
       document.im2.src = dos+heur2+".gif";
       document.im3.src = dos+min1+".gif";
	   document.im4.src = dos+min2+".gif";	
                setTimeout("changer_jjs()", 10000);				
}
changer_jjs();


