// random dice 1 images
let randomNumber1 = Math.floor((Math.random() * 6) + 1);

let randomImage = 'images/dice' + randomNumber1 + '.png';

let image1 = document.querySelectorAll('img')[0].setAttribute('src', randomImage);

// random dice 2 images
let randomNumber2 = Math.floor((Math.random() * 6) + 1);

let randomImage2 = 'images/dice' + randomNumber2 + '.png';

let image2 = document.querySelectorAll('img')[1].setAttribute('src', randomImage2);

if (randomNumber1 === randomNumber2){
    document.querySelector('h1').innerText = 'Draw!';
}
else if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerText = '🚩Player 1 wins!';
}else{
    document.querySelector('h1').innerText = 'Player 2 wins🚩!';
}