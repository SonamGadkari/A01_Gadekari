function IncomeTax()
{	
	var x=document.getElementById("form1");
	var y=x.elements["Income"].value;	
	if(y <= 40000)
	{
		var z= y-0.1*y;
	}
	else if(y > 40000 && y<=90000)
	{
		var z=y-0.12*y;
	}
	else if(y>90000 && y<=120000)
	{
		var z=y-0.2*y;
	}
	else if(y>120000)
	{
		var z=y-0.28*y;
	}
	document.getElementById("demo").innerHTML=y+"$"+" is the total income."+"Income after the deduction of tax is "
	 +z+"$";
}
	