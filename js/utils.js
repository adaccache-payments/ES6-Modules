
export function callApi(text){

	fetch('https://api.payments.ca/fif-branch-sandbox/branches/'+text, {
		method: 'GET', 
		mode: 'cors',
   		headers: {
     	'Authorization': 'Bearer nvf8yBZT22aMm3EtYuSGAQ5dHvOc', 
     	'Content-Type': 'application/vnd.fif.api.v1+json'
		}
	})
	.headers()
	.then(response => response.json())
  	.then(function(response){

  		console.log(response);
  		document.getElementById("validationResults").innerHTML = '<div class="alert alert-success" role="alert">Valid</div>';

  })

}