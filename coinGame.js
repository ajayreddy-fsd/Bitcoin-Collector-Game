
// !the below has the following parts
// 1. code to move the player up/down/left/right
// 2. code to move to the coin to random point on the view-port
// 3. code to detect overlap/touching of coin and player 
// 4. code to calculate game score






// todo     intro
let coin = document.querySelector('#coin');
let player = document.querySelector('#player');

// !why?
// !if not initailized like below, they are treated as NaN
player.style.position = 'relative';
player.style.top = '0px';
player.style.left = '0px';






// todo     intro
// !the below code creates h1-element and places it as first child of body
// !the below code also assigns that h1 a class containting CSS props
let score = 0;
let h1 = document.createElement('h1');
h1.innerText = `score = ${score}`;
document.body.insertAdjacentElement('afterbegin', h1);
h1.classList.add('score');






// todo     part-1
// !the below code moves the player up/down/left/right, 
// !created using eventListener DOM method
// !the below code also rotates the player based on which direction he is moving using transform-property of CSS
document.body.addEventListener('keyup', function (e) {

    switch(e.key){

        case 'ArrowUp':
            if(player.getBoundingClientRect().top - 50 > 0){
                player.style.top = `${parseInt(player.style.top) - 50}px`;
            }
            player.style.transform = 'rotateZ(-90deg)'
            break;

        case 'ArrowDown':
            if(player.getBoundingClientRect().bottom + 50 < window.innerHeight){
                player.style.top = `${parseInt(player.style.top) + 50}px`; 
            }
            player.style.transform = 'rotateZ(90deg)'
            break;

        case 'ArrowLeft':
            if(player.getBoundingClientRect().left - 50 > 0){
                player.style.left = `${parseInt(player.style.left) - 50}px`;
            }
            player.style.transform = 'rotateY(180deg)'
            break;

        case 'ArrowRight':
            if(player.getBoundingClientRect().right + 50 < document.body.clientWidth){
                player.style.left = `${parseInt(player.style.left) + 50}px`;
            }
            player.style.transform = 'rotateZ(0deg)'
            break;
    }


    // !why placed this here
    // !this method shd be impd continously to detect the meeting of coin & player
    moveCoin();

});







// todo     part-2
// !the below code moves the coin to random point on view-port whenever coin & player meet
function moveCoin() {
    
    if( isTouching(coin, player) ){

        let h = Math.random() * window.innerHeight * 0.7;
        let w = Math.random() * window.innerWidth * 0.7;

        coin.style.position = 'relative';
        coin.style.top = `${h}px`;
        coin.style.left = `${w}px`;

        // !why placed this here
        // !whenever this if-cond gets impd, score must be incremented
        scoreCalc();
    }

}







// todo     part-3
// !the below code detects the touching of coin & player
function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}








// todo     part-4
// !the below code increments the score and displays it
function scoreCalc() {
    score++;
    h1.innerText = `score = ${score}`;
}




