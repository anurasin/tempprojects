function submitCode() {
  
  let code = document.getElementById('code').value;
  let input = document.getElementById('input').value;
  let lang = document.getElementById('lang').value;
  let inputRadio = 'false';
  let selected = document.querySelector('input[name="inputRadio"]:checked')
  if(selected !== null)
    inputRadio = selected.id;

  let data = {
    code: code,
    input: input, 
    lang:lang,
    inputRadio:inputRadio
  }

  fetch('http://localhost:8080/compilecode', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => {
    let outputValue;
    if(json.output != null)
      outputValue = json.output;
    else if(json.error != null)
      outputValue = json.error;
    else
      outputValue = json;

    let output = document.getElementById('output');
    output.value = outputValue;
    console.log(json)
    })
  .catch(err => console.log(err));
}


