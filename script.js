// This script generates a random color and displays it in a div when the button is clicked
    document.getElementById('generateColor').addEventListener('click', function() {
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('colorDisplay').style.backgroundColor = randomColor;
    document.getElementById('colorDisplay').textContent = randomColor;
        });