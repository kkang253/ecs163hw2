//click rock
rock.onclick = function(){
    let input = "rock";
    let coinSide = Math.floor(Math.random() * 3);
    let computer;
    
    
    if (coinSide == 0) {
    computer = "rock";
    } else if (coinSide == 1) {
    computer = "paper";
    } else {
    computer = "scissors";
    }
    
    //hide unchosen images
    document.getElementById('paper').style.display = 'none';
    document.getElementById('scissors').style.display = 'none';
    
    algo(input, computer);
    }
    
//click paper  
paper.onclick = function(){
    let input = "paper";
    let coinSide = Math.floor(Math.random() * 3);
    let computer;
    
    if (coinSide == 0) {
    computer = "rock";
    } else if (coinSide == 1) {
    computer = "paper";
    } else {
    computer = "scissors";
    }
    
    document.getElementById('rock').style.display = 'none';
    document.getElementById('scissors').style.display = 'none';
    
    algo(input, computer);
    }
    
    
//click scissors
    scissors.onclick = function(){
    let input = "scissors";
    let coinSide = Math.floor(Math.random() * 3);
    let computer;
    
    if (coinSide == 0) {
    computer = "rock";
    } else if (coinSide == 1) {
    computer = "paper";
    } else {
    computer = "scissors";
    }
    
    document.getElementById('rock').style.display = 'none';
    document.getElementById('paper').style.display = 'none';
    
    algo(input, computer);
    }
    
    
//main algorithm
function algo(input, computer) {


    //display computer choice
    let computerImage = document.createElement('img');

    computerImage.src = '../img/'+computer + '.jpg';
    computerImage.alt = computer;
    computerImage.width = 200;
    computerImage.height = 200;
    document.getElementById('output').appendChild(computerImage);
    
    
    //display output text
    let output_text = document.createElement('p'); //add element
    
    //compute result
    if (input == computer) {
    output_text.textContent = "It's a tie!";
    } 

    else if (
    (input == 'rock' && computer == 'scissors') ||
    (input == 'paper' && computer == 'rock') ||
    (input == 'scissors' && computer == 'paper')
    ) {

    output_text.textContent = "You win!";
    } 
    else {
    output_text.textContent = "Computer wins!";
    }

    document.getElementById('output').appendChild(output_text); //add to output
    
}
    
    