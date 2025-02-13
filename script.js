document.getElementById('valentineButton').addEventListener('click', function() {
    let response;
    do {
        response = confirm('Will you be my Valentine, Niyati Malik?');
        if (response) {
            alert('I am so glad!');
        } else {
            alert('Sorry, not allowed. Please choose again.');
        }
    } while (!response);
});
