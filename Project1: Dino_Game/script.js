let character = document.querySelector("#character");
let block = document.querySelector("#block");
let value = document.querySelector("#value");
var counter = 0;
function jump() {
    if(!character.classList.contains("animateChar")) {
        character.classList.add("animateChar");
        setTimeout(
            () => {
                character.classList.remove("animateChar");
            },
             500);
    
        if(!block.classList.contains("animateBlock")){
            block.classList.add("animateBlock");
        }
        setInterval(
            function() {
                counter++;
                value.innerText = counter;
            },500
            )
    }
}

//Check if character hit the object
setInterval(
    function() {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
        if(blockLeft<=35 && blockLeft>=5 && characterTop>=130) {
            alert("Game over. Restart?")
            block.classList.remove("animateBlock");
            character.classList.remove("animateChar");
            counter = 0;
            location.reload();
        }
    }, 1);

for (let i =0; i<5; i++) {
    ejkrfekrgnfke
}

