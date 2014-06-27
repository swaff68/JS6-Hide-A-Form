$(document).on('ready', function() {
 

var $el;

$('button').click(function(){
	$('form').show()
	$('button').hide()
});

$('#editForm').submit(function(x) {
	$el = $(this);
	x.preventDefault()
	// console.log($el)

	var input = $('#nameInput').val()
	$('#name').text(input)

	var input = $('#bioInput').val()
	$('#bio').text(input)

	$('#favBooks').empty();
	var bookString = $('#bookInput').val();
	var bookArray = bookString.split(', ');
		for (var i=0; i<bookArray.length; i++){
		$('#favBooks').append('<li>' + bookArray[i] + '</li>');
	}

	$('#favLibs').empty();
	var libsString = $('#jslInput').val();
	var libsArray = libsString.split(', ');
		for (var i=0; i<libsArray.length; i++){
		$('#favLibs').append('<li>' + libsArray[i] + '</li>');
	}




	$('form').hide()
	$('button').show()


	});
	

  
});