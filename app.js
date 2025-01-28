const scriptURL = 'https://script.google.com/macros/s/AKfycby8pXx3kDEriPVTOI4UlEHXYvuHxkKYhvGrgTd_oBRS-8G3Vrk5vFulHAh92Mk6-XHK/exec'
const form = document.forms['wish-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
