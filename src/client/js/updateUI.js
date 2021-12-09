function updateUI(response) {
		document.getElementById("results").style.display = "block";
		document.getElementById("agreement").innerHTML = response.agreement;
		document.getElementById("irony").innerHTML = response.irony;
		document.getElementById("confidence").innerHTML = response.confidence;
		document.getElementById("subjectivity").innerHTML = response.subjectivity;
}

export { updateUI }
