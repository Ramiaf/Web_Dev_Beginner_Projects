const images = [
    "images/cheeseburger.png",
    "images/cheeseburger.png",
    "images/fries.png",
    "images/fries.png",
    "images/hotdog.png",
    "images/hotdog.png",
    "images/ice-cream.png",
    "images/ice-cream.png",
    "images/pizza.png",
    "images/pizza.png",
    "images/milkshake.png",
    "images/milkshake.png"
]
let index = [];
let clicks = 0;
let total_matches = 0;

//This creates a node list of img elements and then converts them to an array that holds the ids of these elements as strings
let imgs = document.querySelectorAll(".imageDisplay");
let img_ids = Array.from(imgs).map(img => img.id);

//We loop over the imgIDs to give them an image(fill in the src attribute)
for (let i=0; i<img_ids.length; i++) {
    //randomly assign the images to the elements every single time
    var x = Math.floor(Math.random() * images.length);
    while (index.includes(x)) {
        x = Math.floor(Math.random() * images.length);
    }
    //Keep track of the images that have been already used.
    index.push(x);

    //Retrieve the img element from its ID and update its src attr
    var img = document.getElementById(img_ids[i]);
    img.src = images[x];

    //Retrieve the square element relative to this img element and give it a 'data-image' attribute holding the imgID as str
    var square = document.getElementById(i+1);
    square.setAttribute("data-image", img_ids[i]);

    var images_IDs_shown = [];

    //assign an anonymous function to the action of clicking on any one of the squares
    square.onclick = function() {
        //"this.dataset.image" retrieves the imgId that the selected square stores so that we can retrieve the img element holding that id
        image_to_be_added = document.getElementById(this.dataset.image);
        
        //if the style of the img element is 'none' (meaning it is not revealed)
        if (image_to_be_added.style.display==="none") {
            //keep track of the clicks up to a maximum of 2 (2 images shown at a time)
            clicks +=1;
            
            //store the img elements that have revealed to be able to compare them
            images_IDs_shown.push(image_to_be_added);
            
            //if 2 images have been revealed and their sources are different, then no match
            if (clicks===2 && images_IDs_shown[0].src!==images_IDs_shown[1].src) {
                //show the image before removing it
                showImage(this);
                
                //Gives some time (500ms) for the user to see the 2nd image that was chosen before hiding the 2 images once more
                setTimeout(() => {
                    hideImages(images_IDs_shown);
                    clicks=0;
                    images_IDs_shown = [];
                }, 500);
            }
            //if the 2 images that were chosen are the same, match!
            else if (clicks===2 && images_IDs_shown[0].src===images_IDs_shown[1].src) {
                //keep track of the total matches (number of images/2)
                total_matches+=1;
                showImage(this);
                clicks=0;
                images_IDs_shown = [];
            }
            //if clicks<2, just show the image (it is the first one of the two)
            else{
                showImage(this);
            }
            //Once we have all the matches, the game ends
            if (total_matches===6) {
                setTimeout(() => {
                    alert("Congratulations, you matched all the images! Click 'OK' to play again.");
                    location.reload();
                }, 30);
            }
        };
    }
}
//function to show the image within the square
function showImage(clickedSquare) {
    let imgID = clickedSquare.dataset.image;
    let img = document.getElementById(imgID);
    img.style.display = "grid";
}
//funtion to hide the images that were displayed but not matched
function hideImages(images_IDs) {
    
    for (let i =0; i<images_IDs.length; i++) {
        let img = images_IDs[i];
        img.style.display = "none";
    }
}