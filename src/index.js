
exports.min = function min (array) {
	if(array === undefined || array.length == 0)
	{
		return 0;
	}
	let minValue = array[0];
	array.forEach(function(element){
	if(element < minValue){
		minValue = element;
	}
	});
	return minValue;
	
}

exports.max = function max (array) {
    if(array === undefined || array.length == 0){
		return 0;
	}	

	let maxValue = array[0];
	array.forEach(function(element){
		if(element > maxValue)
		{
			maxValue = element;
		}
	});
	return maxValue;
}

exports.avg = function avg (array) {
    if(array === undefined || array.length == 0)
	{
		return 0;
	}

	let sumValues = 0;
	array.forEach(function(element){
		sumValues += element;
	});
	return sumValues / array.length;
}
