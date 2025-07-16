let scoreP = 0;
let scoreC = 0;

const cards = document.querySelectorAll(".cards");
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("result");

function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

cards.forEach(card => {
    card.addEventListener('click', (event) => {
      let choice = event.target.id;
        const computerChoice = getRandomNumber();
        if (choice != computerChoice) {
            switch (choice) {
                case "1":
                    if (computerChoice == 2) {
                        scoreC += 1;
                        result.textContent = "You lose, paper beats rock";
                    } else {
                        scoreP += 1;
                        result.textContent = "You win, rock beats scissors";
                    }
                    break;
                case "2":
                    if (computerChoice == 3) {
                        scoreC += 1;
                        result.textContent = "You lose, scissors beats paper";
                    } else {
                        scoreP += 1;
                        result.textContent = "You win, paper beats rock";
                    }
                    break;
                case "3":
                    if (computerChoice == 1) {
                        scoreC += 1;
                        result.textContent = "You lose, rock beats scissors";
                    } else {
                        scoreP += 1;
                        result.textContent = "You win, scissors beats paper";
                    }
                    break;
            }

        } else {
            result.textContent = "It's a tie!";
        }
        player.textContent = "" + scoreP;
        computer.textContent = "" + scoreC;

    });
});

