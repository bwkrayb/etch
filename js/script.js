$(document).ready(function(){
	var squaresPerRow = 16;
	var wrapperWidth = 800
	var squareDim = wrapperWidth / squaresPerRow;
	var colorA = 'red';
	var colorB = 'blue';
	var color1 = colorA
	var color2 = colorB
	buildGrid();
	hoverStuff();
	buttons();
;


function buildGrid() {
	color1 = colorA;
	color2 = colorB;
	squareDim = wrapperWidth / squaresPerRow;
	$('#wrapper').append("<div id='whole'></div>");
	for(i=0;i<squaresPerRow;i++){
	$('#whole').append('<div id="row' + i + '"></div>');
	$('#row' + i).height(squareDim);
		for(j=0;j<squaresPerRow;j++){
			$('#row' + i).append('<div class="square"></div>')
		};
	}
	$('.square').height(squareDim);
	$('.square').width(squareDim);
	$('.square').css({'background-color':color1});

};

function hoverStuff(){
	$('.square').hover(function(){$(this).css({'background-color' :color2})});
};

function buttons() {
	$('#reset').click(function()
		{for(i=0;i<squaresPerRow;i++){$('.square').css({'background-color':color1})}});	
			
	$('#size').click(function(){
		resetGrid();
		squaresPerRow = prompt("What should the area of this be?") - 1;
		buildGrid();
		hoverStuff();
	});
	$('#color').click(function(){
		resetGrid();
		changeColor();
		buildGrid();
		hoverStuff();
	})
};

function resetGrid() {
	$('#whole').remove();
}

function changeColor() {
	$('#whole').remove();
	colorA = prompt("Color 1");
	colorB = prompt("Color 2");
}

})