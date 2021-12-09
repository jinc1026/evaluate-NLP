import { updateUI } from './js/updateUI'
import { APIFetch } from './js/meaningCloudFetch'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(){
	// Check if input is empty
	const inputVal = document.getElementById("input").value;
	if (inputVal == ""){
		alert("Please input a sentence, paragraph or URL");
	} else {
		// Send fetch request to MeaningCloudAPI
		APIFetch().then(function(response){
			updateUI(response);
		});
	}
	
	event.preventDefault();
});



