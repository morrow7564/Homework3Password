// var taken in from HTML page
var bigEl = document.getElementById('big');
var littleEl = document.getElementById('little');
var digitsEl = document.getElementById('digits');
var objectsEl = document.getElementById('objects');
var resultEl = document.getElementById('result');
var limithEl = document.getElementById('limit');
var generateEl = document.getElementById('generate');

// var that adds that adds the function together from letters, numbers and symbols
var checkboxes = {
	big: getRandomBig,
	little: getRandomLittle,
	digits: getRandomDigits,
	objects: getRandomObjects,
}

// functions for the Letters, Numbers and symbols
function getRandomBig() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
} 
// console.log(getRandomBig())

function getRandomLittle() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
} 
// console.log(getRandomLittle())

function getRandomDigits() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
} 
// console.log(getRandomDigits())

function getRandomObjects() {
  return String.fromCharCode(Math.floor(Math.random() * 11) + 33)
} 
// console.log(getRandomObjects())

// click listner function
generate.addEventListener('click', () => {
	var limit = +limithEl.value;
	var hasBig = bigEl.checked;
	var hasLittle = littleEl.checked;
	var hasDigits = digitsEl.checked;
	var hasObjects = objectsEl.checked;
	
	// console.log(hasBig, hasLittle, hasDigits, hasObjects)

	resultEl.innerText = generatePassword(hasBig, hasLittle, hasDigits, hasObjects, limit);
});

// function for whats actully going to happen when you hit click
function generatePassword(big, little, digits, objects, limit) {
	var generatedPassword = '';
	var typesCount = big + little + digits + objects;
	var typesArr = [{big}, {little}, {digits}, {objects}].filter(item => Object.values(item)[0]);
	
	// console.log('typesCount', typesCount)

	//if nothing is checked then nothing will happen 
	if(typesCount === 0) {
		return '';
	}
	
	// a loop so the the password can generate each type 
	for(var i=0; i<limit; i+=typesCount) {
		typesArr.forEach(type => {
			var htgawm = Object.keys(type)[0];
			generatedPassword += checkboxes[htgawm]();
		});
	}
	
	var passwordResults = generatedPassword.slice(0, limit);
	
	return passwordResults;
}
