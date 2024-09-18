// scripts.js

const scriptURL = 'https://script.google.com/macros/s/AKfycbzZ5DNWu4p3eGg9hJQPa14dyEOoZd6GuWLaquYnbjpu0YU4Pdh3bOKNwHuJhu-qWxr8ww/exec'; // Replace with your Google Apps Script URL
const form = document.forms['submit-to-google-sheet'];


form.addEventListener('submit', e => {
    e.preventDefault();
    
    const formData = new FormData(form);

  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success!', data);
      alert('Form submitted successfully!');
    })
    .catch(error => console.error('Error!', error.message));
});


 
