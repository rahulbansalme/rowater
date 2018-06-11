$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = '/examples/' + $(this).find("option:selected").attr("id") + '.html';
	});
});