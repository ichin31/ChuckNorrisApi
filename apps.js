document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(ian) {
  const num = document.querySelector('input[type="number"]').value;
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${num}`,true);
  xhr.onload= function () {
    if(this.status === 200){
      const response = JSON.parse(this.responseText);
      let output = '';

      if (response.type === 'success') {
        response.value.forEach(function (jk) {
          output+= `<li>${jk.joke}</li>`
        });
        
      } else {
        output += '<li>Chuck Norris Sent an Error Be Afraid</li>'
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }
  xhr.send();
  ian.preventDefault();


  
}