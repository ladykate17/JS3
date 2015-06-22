// JavaScript Document

//PHONE
var userPhone = prompt("Please enter your phone number.\n\n(e.g. XXX-XXX-XXXX)\n\nNOTE: We never sell or rent your personal information.");

if ( (userPhone.charAt(3) === "-") && (userPhone.charAt(7) === "-") && (userPhone.length === 12 ) ) {
	alert("Thank You.");
	console.log("success");
}
else {
	userPhone = prompt("That is not a valid phone number.\nPlease enter using the format: 000-000-0000");
	console.log("error");

}

// //BIRTH DATE
var userBirthDate = prompt("Please enter your birth date.\n(e.g. MM/DD/YY)");

	
if ( (userBirthDate.charAt(2) === "/") && (userBirthDate.charAt(5) === "/") && (userBirthDate.length === 8 ) ) {
	alert("Thank You.");
	console.log("success");
}
else {
	userBirthDate = prompt("Oops, something wasn't entered correctly.\nPlease enter using the format: MM/DD/YY");
	console.log("error");

}

// //POSTAL CODE
var userPostalCode = prompt("Please enter your 5- or 9-digit postal code.\n(e.g. XXXXX or XXXXX-XXX)");

	
if ( (userPostalCode.length === 5) || ((userPostalCode.length === 9) && (userPostalCode.charAt(5) === "-")) ) {
	alert("Thank You.");
	console.log("success");
}
else {
	userPostalCode = prompt("Oops, something wasn't entered correctly.\nPlease enter using the format: XXXXX OR XXXXX-XXX");
	console.log("error");

}

//STATE APPREVIATION
var userState = prompt("Please enter your state abbreviation.");
	
if ( (userState.length === 2) ) {
	alert("Thank You.");
	console.log("success" + userState.toUpperCase());
}
else {
	userState = prompt("Oops, something wasn't entered correctly.\nPlease enter your two letter state abbreviation.");
	console.log("error");

}

// MARITAL STATUS


