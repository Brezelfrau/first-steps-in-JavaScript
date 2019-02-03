/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/



var scores, roundScore, activePlayer, dice, dice_2;
var previousDice = 0;

scores = [0,0];
roundScore = 0;
activePlayer = 0;


document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.getElementById('inputfield').value = '100';
var limit = document.getElementById('inputfield').value;

document.querySelector('.btn-roll').addEventListener('click', function() {                                  
                                                     
    // 1. random number
          dice = parseInt(Math.floor(Math.random() * 6) + 1);                                           
          dice_2 = parseInt(Math.floor(Math.random() * 6) + 1);
    // 2. display result
          var diceDOM = document.querySelector('.dice');
          var diceDOM_2 = document.querySelector('.dice_2');
          diceDOM.style.display = 'block';
          diceDOM_2.style.display = 'block';
          diceDOM.src = 'dice-' + dice + '.png';
          diceDOM_2.src = 'dice-' + dice_2 + '.png';
                                                     
    // 3. Update roundScore if rolled number is not a 1                                               
          if (dice !== 1 && dice_2 !== 1) { 
             //add score
              roundScore += dice;
              roundScore += dice_2;
             //roundScore = dice + roundScore;
             document.querySelector('#current-' + activePlayer).textContent = roundScore;          
          } else {
              switchPlayer();
          }
           

        if (dice == 6 && previousDice == 6) {                                           // teacher used ===
            document.getElementById('current-' + activePlayer).textContent = '0';
            document.getElementById('score-' + activePlayer).textContent = '0';
            scores[activePlayer] = 0;
            
            switchPlayer();
        }
            previousDice = dice;
            
                                                                                                    
    });


document.querySelector('.btn-hold').addEventListener('click', function() {
    
    // add current score to global score
    scores[activePlayer] += roundScore; 
    
    // update the UI
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    
    // check if player won the game
    if (scores[activePlayer] >= limit) {
        document.getElementById('name-' + activePlayer).innerHTML = 'winner';  
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice_2').style.display = 'none';
    } else {
        switchPlayer();
    }
    
})


function switchPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;                             
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
              
    document.querySelector('.player-0-panel').classList.toggle('active');            
    document.querySelector('.player-1-panel').classList.toggle('active'); 
              
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice_2').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', function() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    limit = document.getElementById('inputfield').value;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('name-0').innerHTML = 'Player 1';  
    document.getElementById('name-1').innerHTML = 'Player 2';  
    
})













