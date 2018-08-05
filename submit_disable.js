$(document).ready(function(){
	$("#rzp-button1").attr('disabled','disabled');
	
	$("form").keyup(function(){
	
	//To disable submit button
	$("#rzp-button1").attr('disabled','disabled');
	$("#rzp-button1").attr('disabled','disabled');

	//Validating Fields
	var fname=$("#fname").val();
	var lname=$("#lname").val();
	var gurl=$("#gurl").val();
	var pemail=$("#pemail").val();
	var whats=$("#whats").val();
	var gender=$("#gender").val();
	var batch=$("#batch").val();
	var coll=$("#coll").val();
	var city=$("#city").val();
	var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

	if(!(fname==""||lname==""||gurl==""||pemail==""||whats==""||gender==""||batch==""||coll==""||city==""))
	{
	if(filter.test(pemail))
	{
	
	//To enable submit button 
	$("#rzp-button1").removeAttr('disabled');
	$("#rzp-button1").css({"cursor":"pointer","box-shadow":"1px 0px 6px #333"});
	}
	}
});

	//On click of submit button 
	// $("#rzp-button1").click(function(){
	// $("#rzp-button1").css({"cursor":"default","box-shadow":"none"});
	// alert("Form Submitted Successfully..!!");
	// });

});