var App ={
	bmi:bmi,
	math:math
}
function bmi () {
	var height = Number(document.getElementById("height").value);
	var weight = Number(document.getElementById("weight").value);
	//height = height*12;
	if (height>0 && weight >0){
		var result = math(height,weight);
		document.getElementById("result").innerHTML = " Your BMI is : " + result;
	}
	else {//if(height<0 || weight<0){
		result = null;
		document.getElementById("result").innerHTML = " Your BMI is : " + result;
	}
	/** else {
		var result = math(height,weight);
		result = result.toFixed(2);
		document.getElementById("result").innerHTML = " Your BMI is : " + result;
	}
	*/
	
	}

function math(height,weight){
	if (height>0 && weight >0){
	result = (weight*703) / (height *height);
	result = result.toFixed(2);  
		return result;  
	}
	else {
		result = null;
	}
	
}

