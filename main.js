$(document).on('ready', function() {
 

var $el;

$('button').click(function(){
	$('form').show()
	$('button').hide()
});

$('#submit').click(function(x) {
	$el = $(this);
	x.preventDefault()
	// console.log($el)

	var input = $('#nameInput').val()
	$('#name').text(input)

	var input = $('#bioInput').val()
	$('#bio').text(input)

	var input = $('#bookInput').val()
	$('#favBooks').text(input)

	var input = $('#jslInput').val()
	$('#favLibs').text(input)

	$('form').hide()
	$('button').show()


	});

  
});