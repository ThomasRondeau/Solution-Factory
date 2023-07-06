fetch('/getTransaction', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  });