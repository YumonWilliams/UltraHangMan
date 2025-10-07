const imageContainer = document.getElementById('imageContainer');

let hangManImage = null;
// let letterContainer = null; 


//An array that stores all of the words for use with gmae. 
const wordArray = ['grip','hull','aqua','chess','paper','agony','oasis','charm','haste','video','spoils','unseen','aliens','lizard','rising','reward','palace','outage','android','revival','unsworn','carnage','empower','decibel','imaging','cryptic','equinox','shimmer','manhunt','eternal','florist','barrel','overcome','exorcist','cohesive','purifier','prancing','wildlife','desolate','wildness','ceramics','brethren','immodest','hardware','huntsman','shredder','volatile','venomous','composure','recapture','transpose','harmonica','everglade','scavenger','fantastic','depletion','cultivate','resurrect','repulsion'];

//Randomly iterate through "wordArray" upon initialization of the application. Store selected wordin variable. This variable needs to change once the requirements have been met for the word to display. 
let randomIndex = Math.floor(Math.random() * wordArray.length);
let selectedWord = wordArray[randomIndex];

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//0000000000000000000000000000000000000000000000000000000000000000000000000000000
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Variable storing the number of mistakes a player has made. Will need a function to determine death or victory. 


function addNonePNG(){
    //Assigns the image to a variable.
    const noneURL = './assets/images/none.png';
    //CREATE the new image element in the DOM
    const noneImage = document.createElement('img');
    //Set some attributes of this new image div. 
    noneImage.src = noneURL;
    noneImage.alt = 'head'
    noneImage.style.width = '200px';
    noneImage.style.height = 'auto';
    noneImage.id = 'noneImage';
    //Append that to thhe div withh the id of "image container"
    imageContainer.appendChild(noneImage);
    //shows that PNG ran successfully. 
    console.log('the function to show none.png has been ran')
};
function addHeadPNG(){
    //Assigns the image to a variable.
    const addHeadURL = './assets/images/head.png';
    //CREATE the new image element in the DOM
    const headImage = document.createElement('img');
    //Set some attributes of this new image div. 
    headImage.src = addHeadURL;
    headImage.alt = 'head'
    headImage.style.width = '200px';
    headImage.style.height = 'auto';
    headImage.id = 'headImage';
    //Append that to thhe div withh the id of "image container"
    imageContainer.appendChild(headImage);
    //shows that PNG ran successfully. 
    console.log('the function to show head.png has been ran')
};
function addBodyPNG(){
    //Assigns the image to a variable.
    const addBodyURL = './assets/images/addBody.png';
    //CREATE the new image element in the DOM
    const addBodyImage = document.createElement('img');
    //Set some attributes of this new image div. 
    addBodyImage.src = addBodyURL;
    addBodyImage.alt = 'addBody'
    addBodyImage.style.width = '200px';
    addBodyImage.style.height = 'auto';
    addBodyImage.id = 'addBodyImage';
    //Append that to thhe div withh the id of "image container"
    imageContainer.appendChild(addBodyImage);
    //shows that PNG ran successfully. 
    console.log('the function to show addBody.png has been ran')
};
function addLeftArmPNG(){
    //Assigns the image to a variable.
    const addLeftArmURL = './assets/images/addLeftArm.png';
    //CREATE the new image element in the DOM
    const addLeftArmImage = document.createElement('img');
    //Set some attributes of this new image div. 
    addLeftArmImage.src = addLeftArmURL;
    addLeftArmImage.alt = 'head'
    addLeftArmImage.style.width = '200px';
    addLeftArmImage.style.height = 'auto';
    addLeftArmImage.id = 'addLeftArmImage';
    //Append that to thhe div withh the id of "image container"
    imageContainer.appendChild(addLeftArmImage);
    //shows that PNG ran successfully. 
    console.log('the function to show addLeftArm.png has been ran')
};
function addLeftLegPNG(){
    //Assigns the image to a variable.
    const addLeftLegURL = './assets/images/addLeftLeg.png';
    //CREATE the new image element in the DOM
    const addLeftLegImage = document.createElement('img');
    //Set some attributes of this new image div. 
    addLeftLegImage.src = addLeftLegURL;
    addLeftLegImage.alt = 'head'
    addLeftLegImage.style.width = '200px';
    addLeftLegImage.style.height = 'auto';
    addLeftLegImage.id = 'addLeftLegImage';
    //Append that to thhe div withh the id of "image container"
    imageContainer.appendChild(addLeftLegImage);
    //shows that PNG ran successfully. 
    console.log('the function to show addLeftLeg.png has been ran')
};
function addRightArmPNG(){
    //Assigns the image to a variable.
    const addRightArmURL = './assets/images/addRightArm.png';
    //CREATE the new image element in the DOM
    const addRightArmImage = document.createElement('img');
    //Set some attributes of this new image div. 
    addRightArmImage.src = addRightArmURL;
    addRightArmImage.alt = 'head'
    addRightArmImage.style.width = '200px';
    addRightArmImage.style.height = 'auto';
    addRightArmImage.id = 'addRightArmImage';
    //Append that to thhe div withh the id of "image container"
    imageContainer.appendChild(addRightArmImage);
    //shows that PNG ran successfully. 
    console.log('the function to show addRightArm.png has been ran')
};
function addRightLegPNG(){
    //Assigns the image to a variable.
    const addRightLegURL = './assets/images/addRightLeg.png';
    //CREATE the new image element in the DOM
    const addRightLegImage = document.createElement('img');
    //Set some attributes of this new image div. 
    addRightLegImage.src = addRightLegURL;
    addRightLegImage.alt = 'head'
    addRightLegImage.style.width = '200px';
    addRightLegImage.style.height = 'auto';
    addRightLegImage.id = 'addRightLegImage';
    //Append that to thhe div withh the id of "image container"
    imageContainer.appendChild(addRightLegImage);
    //shows that PNG ran successfully. 
    console.log('the function to show addRightLeg.png has been ran')
};
//Test to see if the images show successfully. 
// addNonePNG()
// addHeadPNG()
// addBodyPNG()
// addLeftArmPNG()
// addLeftLegPNG()
// addRightArmPNG()
// addRightLegPNG()

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//0000000000000000000000000000000000000000000000000000000000000000000000000000000
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//Hide the buttons that player uses to select their letter. 
function hideLetterContainer(){
    const letterContainer = document.getElementById('letterContainer');

    if(letterContainer) {
        letterContainer.style.display = 'none';
    } else {
        console.log('not working');
    }
};

//show the buttons that player uses to select their letter. 
function showLetterContainer() {
    const letterContainer = document.getElementById('letterContainer');

    if(letterContainer) {
        letterContainer.style.display = "inline-block"
    } else {
        console.log('not working');
    }
}
hideLetterContainer();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//0000000000000000000000000000000000000000000000000000000000000000000000000000000
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function letterInput(){
   

};
function wordSelect() {
    let playerHealth = 0
    letterInput();
    const selectedWord = wordArray[randomIndex];

    const selectA = document.getElementById('A');
    const selectB = document.getElementById('B');
    const selectC = document.getElementById('C');
    const selectD = document.getElementById('D');
    const selectE = document.getElementById('E');
    const selectF = document.getElementById('F');
    const selectG = document.getElementById('G');
    const selectH = document.getElementById('H');
    const selectI = document.getElementById('I');
    const selectJ = document.getElementById('J');
    const selectK = document.getElementById('K');
    const selectL = document.getElementById('L');
    const selectM = document.getElementById('M');
    const selectN = document.getElementById('N');
    const selectO = document.getElementById('O');
    const selectP = document.getElementById('P');
    const selectQ = document.getElementById('Q');
    const selectR = document.getElementById('R');
    const selectS = document.getElementById('S');
    const selectT = document.getElementById('T');
    const selectU = document.getElementById('U');
    const selectV = document.getElementById('V');
    const selectW = document.getElementById('W');
    const selectX = document.getElementById('X');
    const selectY = document.getElementById('Y');
    const selectZ = document.getElementById('Z');

    selectA.addEventListener('click', function() {
        //Make sure button was detected. 
        console.log('The A button was pressed.')
        
        //Check to see if the letter is present in the word.
        const hasA = selectedWord.toLowerCase().includes('a');

        //If statement for letter detection. Will hold other logic
        if (hasA) {
            console.log('This word has an A!');
        } else {
            playerHealth += 1;
            console.log('This word does not have an A.') 
            console.log(playerHealth);
        };
    
    });
    selectB.addEventListener('click', function() {
        console.log('The B button was pressed.')
    });
    selectC.addEventListener('click', function() {
        console.log('The C button was pressed.')
    });
    selectD.addEventListener('click', function() {
        console.log('The D button was pressed.')
    });
    selectE.addEventListener('click', function() {
        console.log('The E button was pressed.')
    });
    selectF.addEventListener('click', function() {
        console.log('The F button was pressed.')
    });
    selectG.addEventListener('click', function() {
        console.log('The G button was pressed.')
    });
    selectH.addEventListener('click', function() {
        console.log('The H button was pressed.')
    });
    selectI.addEventListener('click', function() {
        console.log('The I button was pressed.')
    });
    selectJ.addEventListener('click', function(){
        console.log('The J button was pressed.')
    })
    selectK.addEventListener('click', function() {
        console.log('The K button was pressed')
    });
    selectL.addEventListener('click', function() {
        console.log('The L button was pressed.')
    });
    selectM.addEventListener('click', function() {
        console.log('The M button was pressed.')
    });
    selectN.addEventListener('click', function() {
        console.log('The N button was pressed.')
    });
    selectO.addEventListener('click', function() {
        console.log('The O button was pressed.')
    });
    selectP.addEventListener('click', function() {
        console.log('The P button was pressed.')
    });
    selectQ.addEventListener('click', function() {
        console.log('The Q button was pressed.')
    });
    selectR.addEventListener('click', function() {
        console.log('The R button was pressed.')
    });
    selectS.addEventListener('click', function() {
        console.log('The S button was pressed.')
    });
    selectT.addEventListener('click', function() {
        console.log('The T button was pressed.')
    });
    selectU.addEventListener('click', function() {
        console.log('The U button was pressed')
    });
    selectV.addEventListener('click', function() {
        console.log('The V button was pressed.')
    });
    selectW.addEventListener('click', function() {
        console.log('The W button was pressed.')
    });
    selectX.addEventListener('click', function() {
        console.log('The X button was pressed.')
    })
    selectY.addEventListener('click', function() {
        console.log('The Y button was pressed.')
    });
    selectZ.addEventListener('click', function() {
        console.log('The Z button was pressed.')
    });
};//This function displays the word onto the canvas.
function displayWord() {
    //This grabs the random word
    wordSelect()

    //This grabs the id of the div that word is displayed in
    const wordContainer = document.getElementById('wordContainer');

    //This creates the element that the word is displayed in.     
    const randomWordSelected = document.createElement('h2');

    //Attributes for the newly created element. 
    randomWordSelected.id = 'gameplayWord';
   

    //Initialize an empty array to store the underscores. 
    let underscoreArray = [];

    for (let i = 0; i < selectedWord.length; i++) {
        underscoreArray.push('_ ')
    }

    //Display results in the newly created div.
    // randomWordSelected.style.backgroundColor = 'blue'
    randomWordSelected.textContent = `selectedWord + ${underscoreArray.join('')}`; 

    wordContainer.appendChild(randomWordSelected)
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//0000000000000000000000000000000000000000000000000000000000000000000000000000000
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

startButton.addEventListener('click', function() {
    console.log('start button was pressed')
    startButton.style.display = 'none';

    
  
    displayWord()

    let letterContainer = document.getElementById('letterContainer')

    showLetterContainer()
    //loop trough word array
    // wordArray.forEach((item, index) => {
    // console.log(`Index ${index}: ${item}`);
    // });

});

function displayHangman() {
    if(playerHealth == 0){
        console.log('Head')
    } else if(playerHealth == 1) {
      console.log('addBody')
    } else if(playerHealth ==2) {
      console.log('add')
    }
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//0000000000000000000000000000000000000000000000000000000000000000000000000000000
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//0000000000000000000000000000000000000000000000000000000000000000000000000000000
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

resetButton.addEventListener('click', function() {
    console.log('reset button was pressed')

    //Add the start button back to screen.
    if (startButton.style.display === 'none') {
        startButton.style.display = 'inline-block'
    } else {
        startButton.style.display = 'none';
    };

    //remove image from the screen.
    let hangManImage = document.getElementById('hangManImage')

    if(hangManImage) {
        hangManImage.remove();
    } else {
        console.log('No image with that ID found—add one first.')
    };

    hideLetterContainer();
});









