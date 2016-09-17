$(document).ready(function(){
	console.log('hello');
	$('.nav-default li a').click(function(){
			$('li a').removeClass("active");
			$(this).addClass("active");
			console.log('something is happening');


	})

	$('#hamburger').click(function(){
		console.log('hey');
		$('.nav-default').addClass('nav-mobile');
		console.log('here is a thing');





	})
















})