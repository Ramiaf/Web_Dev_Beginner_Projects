var initial_turn = "X";
var turn = initial_turn;
var number_of_clicks = 0;
var L = new Array(9).fill("");
var p1 = document.getElementById("p1_score");
var p2 = document.getElementById("p2_score");
var p1_score = parseInt(p1.innerText);
var p2_score = parseInt(p2.innerText);
var message = document.getElementById("message");
var squares = document.querySelectorAll(".square");
var square_ids = Array.from(squares).map(square => square.id);
var flag = false;
var line;
var line_diagonal_left = document.getElementById("line-diagonal-left");
var line_diagonal_right = document.getElementById("line-diagonal-right");
var line_row1 = document.getElementById("line-row1");
var line_row2 = document.getElementById("line-row2");
var line_row3 = document.getElementById("line-row3");
var line_col1 = document.getElementById("line-col1");
var line_col2 = document.getElementById("line-col2");
var line_col3 = document.getElementById("line-col3");

squares.forEach(square => {
    square.addEventListener("click", handleClick);
});

function handleClick() {
    if (turn === "X" && this.innerText === "") {
        this.innerText = "✖️";
        index = square_ids.indexOf(this.id);
        L[index] = "X";
        turn = "O";
        number_of_clicks +=1;
    }
    else if (turn === "O" && this.innerText === ""){
        this.innerText = "⭕";
        index = square_ids.indexOf(this.id);
        L[index] = "O";
        turn = "X";
        number_of_clicks+=1;
    }

    //check row1 for win
    if (L[0] ==="X" && L[0]=== L[1] && L[0] === L[2]) {
        line_row1.classList.add("animate");
        line_row1.style.top = "65px";
        line_row1.style.backgroundColor = "rgb(130, 70, 270)";
        line = line_row1;
        setTimeout(() => {
            message.innerText = "Player1 wins!";
            message.style.color = "rgb(115, 50, 220)";
            p1_score += 1;
            p1.innerText = p1_score;
            flag = true;
        }, 600);
    }

    //check row2 for win
    else if (L[3] ==="X" && L[3] === L[4] && L[3] === L[5]) {
        line_row2.classList.add("animate");
        line_row2.style.top = "197px";
        line_row2.style.backgroundColor = "rgb(130, 70, 270)";
        line = line_row2;
        setTimeout(() => {
            message.innerText = "Player1 wins!";
            message.style.color = "rgb(115, 50, 220)";
            p1_score += 1;
            p1.innerText = p1_score;
            flag = true;
        }, 600);
    }

    //check row3 for win
    else if (L[6] === "X" && L[6] === L[7] && L[6] === L[8]) {
        line_row3.classList.add("animate");
        line_row3.style.top = "331px";
        line_row3.style.backgroundColor = "rgb(130, 70, 270)";
        line = line_row3;
        setTimeout(() => {
            message.innerText = "Player1 wins!";
            message.style.color = "rgb(115, 50, 220)";
            p1_score += 1;
            p1.innerText = p1_score;
            flag = true;
        }, 600);
    }

    //check row1 for win
    else if (L[0] ==="O" && L[0]=== L[1] && L[0] === L[2]) {
        line_row1.classList.add("animate");
        line_row1.style.top = "65px";
        line_row1.style.backgroundColor = "rgb(240, 50, 90)";
        line = line_row1;
        setTimeout(() => {
            message.innerText = "Player2 wins!";
            message.style.color = "rgb(240, 50, 90)";
            p2_score += 1;
            p2.innerText = p2_score;
            flag = true;
        }, 600);
    }

    //check row2 for win
    else if (L[3] ==="O" && L[3] === L[4] && L[3] === L[5]) {
        line_row2.classList.add("animate");
        line_row2.style.top = "197px";
        line_row2.style.backgroundColor = "rgb(240, 50, 90)";
        line = line_row2;
        setTimeout(() => {
            message.innerText = "Player2 wins!";
            message.style.color = "rgb(240, 50, 90)";
            p2_score += 1;
            p2.innerText = p2_score;
            flag = true;
        }, 600);
    }

    //check row3 for win
    else if (L[6] === "O" && L[6] === L[7] && L[6] === L[8]) {
        line_row3.classList.add("animate");
        line_row3.style.top = "331px";
        line_row3.style.backgroundColor = "rgb(240, 50, 90)";
        line = line_row3;
        setTimeout(() => {
            message.innerText = "Player2 wins!";
            message.style.color = "rgb(240, 50, 90)";
            p2_score += 1;
            p2.innerText = p2_score;
            flag = true;
        }, 600);
    }
    
    //check column1 for win
    else if (L[0] ==="X" && L[0] === L[3] && L[0] === L[6]) {
        line_col1.classList.add("animate");
        line_col1.style.transform = "rotate(90deg)";
        line_col1.style.left = "65px";
        line_col1.style.backgroundColor = "rgb(130, 70, 270)";
        line = line_col1;
        setTimeout(() => {
            message.innerText = "Player1 wins!";
            message.style.color = "rgb(115, 50, 220)";
            p1_score += 1;
            p1.innerText = p1_score;
            flag = true;
        }, 600);
    }
    
    //check column2 for win
    else if (L[1] ==="X" && L[1] === L[4] && L[1] === L[7]) {
        line_col2.classList.add("animate");
        line_col2.style.transform = "rotate(90deg)";
        line_col2.style.left = "197px";
        line_col2.style.backgroundColor = "rgb(130, 70, 270)";
        line = line_col2;
        setTimeout(() => {
            message.innerText = "Player1 wins!";
            message.style.color = "rgb(115, 50, 220)";
            p1_score += 1;
            p1.innerText = p1_score;
            flag = true;
        }, 600);
    }
    
    //check column3 for win
    else if (L[2] === "X" && L[2] === L[5] && L[2] === L[8]) {
        line_col3.classList.add("animate");
        line_col3.style.transform = "rotate(90deg)";
        line_col3.style.left = "331px";
        line_col3.style.backgroundColor = "rgb(130, 70, 270)";
        line = line_col3;
        setTimeout(() => {
            message.innerText = "Player1 wins!";
            message.style.color = "rgb(115, 50, 220)";
            p1_score += 1;
            p1.innerText = p1_score;
            flag = true;
        }, 600);
        }

    //check column1 for win
    else if (L[0] ==="O" && L[0] === L[3] && L[0] === L[6]) {
            line_col1.classList.add("animate");
            line_col1.style.transform = "rotate(90deg)";
            line_col1.style.left = "65px";
            line_col1.style.backgroundColor = "rgb(240, 50, 90)";
            line = line_col1;
            setTimeout(() => {
                message.innerText = "Player2 wins!";
                message.style.color = "rgb(240, 50, 90)";
                p2_score += 1;
                p2.innerText = p2_score;
                flag = true;
            }, 600);
        }
        
        //check column2 for win
    else if (L[1] ==="O" && L[1] === L[4] && L[1] === L[7]) {
            line_col2.classList.add("animate");
            line_col2.style.transform = "rotate(90deg)";
            line_col2.style.left = "197px";
            line_col2.style.backgroundColor = "rgb(240, 50, 90)";
            line = line_col2;
            setTimeout(() => {
                message.innerText = "Player2 wins!";
                message.style.color = "rgb(240, 50, 90)";
                p2_score += 1;
                p2.innerText = p2_score;
                flag = true;
            }, 600);
        }
        
    //check column3 for win
    else if (L[2] === "O" && L[2] === L[5] && L[2] === L[8]) {
            line_col3.classList.add("animate");
            line_col3.style.transform = "rotate(90deg)";
            line_col3.style.left = "331px";
            line_col3.style.backgroundColor = "rgb(240, 50, 90)";
            line = line_col3;
            setTimeout(() => {
                message.innerText = "Player2 wins!";
                message.style.color = "rgb(240, 50, 90)";
                p2_score += 1;
                p2.innerText = p2_score;
                flag = true;
            }, 600);
            }

    //check left diagonal for win
    else if (L[0] ==="X" && L[0] === L[4] && L[0] === L[8]) {
        line_diagonal_left.classList.add("animate-diag");
        line_diagonal_left.style.backgroundColor = "rgb(130, 70, 270)";
        line_diagonal_left.style.transform = "rotate(45deg)";
        line = line_diagonal_left;
        setTimeout(() => {
            message.innerText = "Player1 wins!";
            message.style.color = "rgb(130, 70, 270)";
            p1_score += 1;
            p1.innerText = p1_score;
            flag = true;
        }, 600);
    }

    //check right diagonal for win
    else if (L[2] ==="X" && L[2] === L[4] && L[2] === L[6]) {
        line_diagonal_right.classList.add("animate-diag");
        line_diagonal_right.style.backgroundColor = "rgb(115, 50, 220)";
        line_diagonal_right.style.left = "100%";
        line_diagonal_right.style.transform = "rotate(136deg)";
        line = line_diagonal_right;
        setTimeout(() => {
            message.innerText = "Player1 wins!";
            message.style.color = "rgb(115, 50, 220)";
            p1_score += 1;
            p1.innerText = p1_score;
            flag = true;
        }, 600);
        }

    //check left diagonal for win
    else if (L[0] ==="O" && L[0] === L[4] && L[0] === L[8]) {
            line_diagonal_left.classList.add("animate-diag");
            line_diagonal_left.style.backgroundColor = "rgb(240, 50, 90)";
            line_diagonal_left.style.transform = "rotate(45deg)";
            line = line_diagonal_left;
            setTimeout(() => {
                message.innerText = "Player2 wins!";
                message.style.color = "rgb(240, 50, 90)";
                p2_score += 1;
                p2.innerText = p2_score;
                flag = true;
            }, 600);
        }

    //check right diagonal for win
    else if (L[2] ==="O" && L[2] === L[4] && L[2] === L[6]) {
            line_diagonal_right.classList.add("animate-diag");
            line_diagonal_right.style.backgroundColor = "rgb(240, 50, 90)";
            line_diagonal_right.style.left = "100%";
            line_diagonal_right.style.transform = "rotate(136deg)";
            line = line_diagonal_right;
            setTimeout(() => {
                message.innerText = "Player2 wins!";
                message.style.color = "rgb(240, 50, 90)";
                p2_score += 1;
                p2.innerText = p2_score;
                flag = true;
            }, 600);
            }
    
    //checks if draw
    else if (flag === false && number_of_clicks === 9) {
        flag=true;
        message.innerText = "It's a draw!";
        p1_score +=1;
        p2_score += 1;
        p1.innerText = p1_score;
        p2.innerText = p2_score;
    }
    setTimeout(() => {
        if (flag===true) {  //if somebody won or if draw
            squares.forEach(square => {
                square.removeEventListener("click", handleClick);
            });
    
            let button = document.createElement("button");
            if (initial_turn === "X") {
                button.innerText = "Play Again? Player2 will start";
            }
            else {
                button.innerText = "Play Again? Player1 will start";
            }
            document.getElementById("message").appendChild(button);
            button.style.backgroundColor = "teal";
            button.style.color = "lightgrey";
            button.style.cursor = "pointer";
            button.style.height = "30px";
            button.style.width = "300px";
            button.style.fontWeight = "bold";
            button.style.position = "relative";
            button.style.top = "10px";
            button.style.borderRadius = "15px";
            
            button.addEventListener("click", () => {
                button.remove();
                line.classList.remove("animate");
                message.innerText = "";
                message.style.color = "teal";
                if (initial_turn === "X") {
                    initial_turn = "O";
                }
                else {
                    initial_turn = "X";
                }
                turn = initial_turn;
                
                squares.forEach(square => {
                    square.innerText = "";
                    flag = false;
                    number_of_clicks = 0;
                    L = new Array(9).fill("");
                    square.addEventListener("click", handleClick);
                })
            })
        }
    }, 700);

}

