var buttons = document.querySelectorAll(".buttons");
var button_ids = Array.from(buttons).map(button => button.id);
var message = document.getElementById("message");
var user = document.getElementById("user_score");
var comp = document.getElementById("comp_score");
var user_score = 0;
var comp_score = 0;
var user_choice = document.getElementById("user_choice");
var C_choice = document.getElementById("comp_choice");

//it assigns for all the buttons something to happen when clicked
buttons.forEach(button => {     //loops over every button

    //button.addEventListener specifies that the action is to be executed only once whenever 1 button is clicked.
    //without "button", it applies the action x times (x being the number of buttons there are)
    button.addEventListener("click", () => {
        var index_chosen = Math.floor(Math.random() * button_ids.length);
        var comp_choice = button_ids[index_chosen]

        if (button.id==="Rock" && comp_choice==="Rock") {
            message.innerText = "It's a draw!";
            message.style.color = "grey";
            user_choice.innerText = "Rock";
            C_choice.innerText = "Rock";
            user_score+=1;
            comp_score+=1;
        }
        else if (button.id==="Rock" && comp_choice==="Paper") {
            message.innerText = "Computer wins!";
            message.style.color = "red";
            user_choice.innerText = "Rock";
            C_choice.innerText = "Paper";
            comp_score+=1;
        }
        else if (button.id==="Rock" && comp_choice==="Scissors") {
            message.innerText = "You win!";
            message.style.color = "green";
            user_choice.innerText = "Rock";
            C_choice.innerText = "Scissors";
            user_score+=1;
        }
        else if (button.id==="Paper" && comp_choice==="Rock") {
            message.innerText = "You win!";
            message.style.color = "green";
            user_choice.innerText = "Paper";
            C_choice.innerText = "Rock";
            user_score+=1;
        }
        else if (button.id==="Paper" && comp_choice==="Paper") {
            message.innerText = "It's a draw!";
            message.style.color = "grey";
            user_choice.innerText = "Paper";
            C_choice.innerText = "Paper";
            user_score+=1;
            comp_score+=1;
        }
        else if (button.id==="Paper" && comp_choice==="Scissors") {
            message.innerText = "Computer wins!";
            message.style.color = "red";
            user_choice.innerText = "Paper";
            C_choice.innerText = "Scissors";
            comp_score+=1;
        }
        else if (button.id==="Scissors" && comp_choice==="Rock") {
            message.innerText = "Computer wins!";
            message.style.color = "red";
            user_choice.innerText = "Scissors";
            C_choice.innerText = "Rock";
            comp_score+=1;
        }
        else if (button.id==="Scissors" && comp_choice==="Paper") {
            message.innerText = "You win!";
            message.style.color = "green";
            user_choice.innerText = "Scissors";
            C_choice.innerText = "Paper";
            user_score+=1;
        }
        else if (button.id==="Scissors" && comp_choice==="Scissors") {
            message.innerText = "It's a draw!";
            message.style.color = "grey";
            user_choice.innerText = "Scissors";
            C_choice.innerText = "Scissors";
            user_score+=1;
            comp_score+=1;
        }
        user.innerText = user_score;
        comp.innerText = comp_score;
    });
});