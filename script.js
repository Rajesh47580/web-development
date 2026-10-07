 function rollDice() {

            const dice = document.getElementById("dice");
            const result = document.getElementById("result");

            // Generate random number from 1 to 6
            const randomNumber = Math.floor(Math.random() * 6) + 1;

            // Dice symbols
            const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

            // Add animation
            dice.classList.remove("rolling");

            // Restart animation
            void dice.offsetWidth;

            dice.classList.add("rolling");

            // Display dice face
            dice.textContent = diceFaces[randomNumber - 1];

            // Display result
            result.textContent = "You rolled: " + randomNumber;
        }
