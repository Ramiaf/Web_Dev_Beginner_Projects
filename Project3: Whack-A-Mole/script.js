var squares = document.querySelectorAll(".square");
var square_ids = Array.from(squares).map(square => square.id);   //Get the square IDs from the "squares" NodeList
var last_index = 11;    //can be any number as long as it is greater than the max value of the "squares" list
var score_val = 0;      //Current Score of player

//Start the game only when the player clicks anywhere on the screen
document.addEventListener("click", StartGame);

function StartGame() {
    //remove the event listener so that the game doesn't start multiple times
    document.removeEventListener("click", StartGame);

    //Every x ms, a randomly selected square_id will display the mole image
    setInterval(() => {
        var index_chosen = Math.floor(Math.random() * square_ids.length);
        //is the index_chosen is equal to the last index chosen, change it so that the pic does not appear in the same square consecutively
        while (index_chosen === last_index) {
            index_chosen = Math.floor(Math.random() * square_ids.length);
        }
        //update last_index to keep track of last square that displayed the image
        last_index = index_chosen;
        
        //Extract the square that was selected and add the pic to be displayed inside it
        chosen_sqr = document.getElementById(square_ids[index_chosen]);
        chosen_sqr.style.backgroundImage = "url('mole_pic.jpg')";
        chosen_sqr.style.backgroundSize = "150px 160px"; //width height
        chosen_sqr.style.backgroundRepeat = "no-repeat"; // Prevent tiling
        chosen_sqr.style.backgroundPosition = "center";

        //this function is assigned to all the squares
        chosen_sqr.onclick = function() {
            //"this" references the actual square that was selected
            //If !== none this means that the user clicked on the image holding the mole pic
            if (this.style.backgroundImage !== "none") {
                //update the score
                var current_score = document.getElementById("s_val");
                score_val = parseInt(current_score.innerText);
                current_score.innerText = score_val+1;
                this.style.backgroundImage = "none";    //We update the score and remove the image to prevent getting multiple points from the same square
            }
            score_val = current_score.innerText;    //store the updated score before next loop to prevent issues when the game ends and message displays
        }
        
        //To hide the image after x ms of time has passed (without setTimeout, it will directly remove it which does not make sense)
        setTimeout(() => {
            chosen_sqr.style.backgroundImage = "none";
        }, 600);    //There is a 50 ms window where nothing is displayed on the screen for proper animation effect of showing pic and removing it

    }, 650);

    //update time every 1 second (We separate it from the pervious setInterval because it is faster than 1s so that will cause overlapping of events and make time go faster)
    setInterval(() => {
        var current_time = document.getElementById("t_val");
        var time_left = parseInt(current_time.innerText);
        current_time.innerText = time_left - 1;

        if (current_time.innerText === "0") {
            //We need to give it some time to display "time: 0"
            setTimeout(() => {
                alert(`Game Over! Your score was: ${score_val}.\nClick 'OK' to play again.`);
                location.reload();
            }, 30);  //So after 30ms display the Game over message
        }
    }, 1000);
};
