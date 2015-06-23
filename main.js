// JavaScript Document


var isNumber = function(n) {
 return !isNaN(parseFloat(n)) && isFinite(n);
};


// PHONE
var getPhone = function(){ // this defines the function

	var userPhone = prompt("Please enter your phone number.\n\n(e.g. 000-000-0000)\n\nNOTE: We never sell or rent your personal information.");

	if (  ( isNumber(userPhone) ) && (userPhone.charAt(3) === '-') && (userPhone.charAt(7) === '-') && (userPhone.length === 12)  ) {
		alert("Thank You.");
		console.log("userPhone: " + userPhone);
		return userPhone;
	}
	else {
		alert("Error: Something wasn't entered correctly. Try again, using the format: 000-000-0000");
		getPhone();
	}

}

// getPhone(); // the calls the previously defined function to run



// BIRTH DATE
var getBirthDate = function(){

	var userBirthDate = prompt("Please enter your birth date.\n(e.g. MM/DD/YY)");
	
	if ( (userBirthDate.charAt(2) === "/") && (userBirthDate.charAt(5) === "/") && (userBirthDate.length === 8 ) ) {
		alert("Thank You.");
		console.log("userBirthDate: " + userBirthDate);
		return userBirthDate;

	}
	else {
		alert("Oops, something wasn't entered correctly.\nPlease enter using the format: MM/DD/YY");
		getBirthDate();

	}
}

//getBirthDate();



//POSTAL CODE
var getPostalCode = function(){

	var userPostalCode = prompt("Please enter your 5- or 9-digit postal code.\n(e.g. XXXXX or XXXXX-XXX)");
		
	if ( (userPostalCode.length === 5) || ((userPostalCode.length === 9) && (userPostalCode.charAt(5) === "-")) ) {
		alert("Thank You.");
		console.log("userPostalCode: " + userPostalCode);
	}
	else {
		alert("Oops, something wasn't entered correctly.\nPlease enter using the format: XXXXX OR XXXXX-XXX");
		getPostalCode();

	}
}

//getPostalCode();



// STATE ABBREVIATION

var validateState = function(stateAbb){
	var validStates = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
	var a = validStates.indexOf(stateAbb);
	if ( a > -1 ) {
		return true;
	}
	else{
		return false;
	}
}

var getState = function() {
	var userState = prompt("Please enter your state abbreviation.");
	

	if (  ( validateState(userState.toUpperCase()) ) && (userState.length === 2)  ) {
		alert("Thank You.");
		console.log("userState: " + userState.toUpperCase());
	}
	else {
		alert("Oops, something wasn't entered correctly.\nPlease enter your two letter state abbreviation.");
		getState();

	}
}

//getState();

// MARITAL STATUS

var getUserMaritalSatus = function(){

	var userMaritalStatus = prompt( "Are you married? (Yes or No)" );
		
	if ( ( (userMaritalStatus.toUpperCase()) === "YES") || ( (userMaritalStatus.toUpperCase()) === "NO")) {
		alert("Thank You.");
		console.log("userMaritalStatus: " + userMaritalStatus);
		return userMaritalStatus;
	}
	else {
		alert("Oops, something wasn't entered correctly.\nPlease answer with Yes or No.");
		getUserMaritalSatus();

	}
}

//getUserMaritalSatus();

