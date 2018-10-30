function closestNumber(a,b){
	if(a == undefined || b == undefined){
	return '';
	}
	else if (a > 0){
	for(i = a; i > b; i--){
	if(i % b == 0){
	return i;
	}
	}
	}
	else{
		for(i = a;i<b;i--){
		if(i % b == 0){
	return i;
		}
		}
	}
}

console.log(closestNumber(-15,6));