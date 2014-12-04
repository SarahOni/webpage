


//Code by Dante email: mailto:pianoman@reno.com
//minor edits done by me, 1/12/14
// Executes on click of login button.
//Powered by DCScript
	var attempt = 3; // Variable to count number of attempts

function logIn() 
{
	var pass=unescape("%31%32%31%34");
	var pass2=unescape("%61%64%6d%69%6e");
	
	if (document.lform.login.value == pass)
	{
		alert("Valid password. Access granted");
		window.location.href="LoggedIn.html";
	}
	
	else if(document.lform.login.value == pass2)
	{
		alert("Valid Password. Access granted");
		window.location.href="LoggedIn.html";
	}
	
	else 
	{
		alert("Invalid password. Please try again");
		attempt --;
		if( attempt == 0)
		{
			alert("Invalid password has been entered 3 times. Login disabled");
			document.getElementById("buttn").disabled = true;

		}

	}
}



