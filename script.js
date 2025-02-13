document.getElementById('valentineButton').addEventListener('click', function() {
    let response;
    do {
        response = confirm('Will you be my Valentine, Niyati Malik?');
        if (response) {
            alert('I am so glad!');
            addFlowers();
        } else {
            alert('Sorry, not allowed. Please choose again.');
        }
    } while (!response);
});

function addFlowers() {
    const container = document.querySelector('.container');
    const flowerImg = document.createElement('img');
    flowerImg.src = 'flowers.png'; // Relative link to the local flower image
    flowerImg.alt = 'Flower';
    flowerImg.className = 'flower';
    container.appendChild(flowerImg);
}
