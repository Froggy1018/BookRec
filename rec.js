const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const data = new FormData();
    data.append('entry.111194161', document.getElementById('title').value);
    data.append('entry.930214647', document.getElementById('author').value);
    data.append('entry.528612468', document.getElementById('genre').value);
    data.append('entry.174680702', document.getElementById('thoughts').value);
    
    fetch('https://docs.google.com/forms/d/e/1FAIpQLScDchhPJ9MMTmgeAdZG6TYzg32RYfXDxnU-v-l75Fmz1gGNBQ/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        body: data,
    }).then(response => {
        alert('Thank you for your book recommendation! It has been submitted successfully.');
        form.reset();
    }).catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your recommendation. Please try again.');
    });
});