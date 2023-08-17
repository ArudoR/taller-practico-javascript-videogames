const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame(){
    // game.fillRect(0, 50, 100, 100);
    game.font = '25px Verdana'
    game.fillStyle = 'purple';
    game.textAlign = 'center';
    game.fillText('Copymark', 25, 25);
}