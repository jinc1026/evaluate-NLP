async function APIFetch() {
	const formdata = new FormData();
	const apikey = await getAPIKey();
	console.log("API Key is", apikey);
	formdata.append("key", apikey);
	formdata.append("txt", document.getElementById("input").value);
	formdata.append("lang", "en");  // 2-letter code, like en es fr ...

	const requestOptions = {
	  method: 'POST',
	  body: formdata,
	  redirect: 'follow'
	};

	const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
	try {
		const data = await response.json();
		return data;
	} catch (error) {
		console.log("error", error);
	}
}

async function getAPIKey(){
	const response = await fetch("/apikey");
	const data = await response.text();
	
	return data;
}

export { APIFetch }
