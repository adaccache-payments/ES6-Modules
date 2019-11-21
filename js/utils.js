  // const div = document.createElement('div');
  // div.textContent = text;
  // document.body.appendChild(div);


export function callApi(text){
  const div = document.createElement('div');

fetch('https://jsonplaceholder.typicode.com/users/'+text)
  .then(response => response.json())
  .then(function(response){
  	console.log(response);

  })

}