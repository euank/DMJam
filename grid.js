var grid = clickableGrid(10,10,function(cell){
	if (cell.className=='clicked')
		cell.className='unclicked';
	else
		cell.className='clicked';
});

document.body.appendChild(grid);

function clickableGrid(rows, cols, callback){
	var grid = document.createElement('table');
	grid.className = 'grid';
	for (var r=0;r<rows;++r){
		var tr = grid.appendChild(document.createElement('tr'));

		for(var c=0;c<cols;++c){
			var cell = tr.appendChild(document.createElement('td'));
			
			cell.addEventListener('click', (function(element){
				return function(){
					callback(element);
				}
			})(cell),false);
		}
	}
	return grid;
}
