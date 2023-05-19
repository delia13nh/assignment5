/*delia nepomuseno hernandez
CSC196
Activity 6 
/*/
alert("helloWorld!"); 

	function myFunction(){
	document.getElementById("input-text").style.fontSize="24pt";
}
function boldLetters(){
	document.getElementById("input-text").style.fontWeight="bold";
	document.getElementById("input-text").style.color = "blue";
}
function original(){
	document.getElementById("input-text").style.fontWeight="normal";
	document.getElementById("input-text").style.color = "black";
}
function moo(){
	const text= document.getElementById("input-text").value;
	const words=text.split(" ");
	for(var i=0; i< words.length; i++){
	let word= words[i].trim();
	word += "Moo";
	words[i]=word;
	}
	document.getElementById("input-text").value= words.join(" ");
}