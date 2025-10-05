const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

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

let hangManImage = null;
// let letterContainer = null; 



const wordArray = ['grip','hull','aqua','chess','paper','agony','oasis','charm','haste','video','spoils','unseen','aliens','lizard','rising','reward','palace','outage','android','revival','unsworn','carnage','empower','decibel','imaging','cryptic','equinox','shimmer','manhunt','eternal','florist','barrel','overcome','exorcist','cohesive','purifier','prancing','wildlife','desolate','wildness','ceramics','brethren','immodest','hardware','huntsman','shredder','volatile','venomous','composure','recapture','transpose','harmonica','everglade','scavenger','fantastic','depletion','cultivate','resurrect','repulsion'];

let playerHealth = 0

function addHangManImage(){
    //Code for images
    const imageContainer = document.getElementById('imageContainer');
    const noneURL = './assets/images/none.png';
    const headImageURL = './assets/images/head.png';
    const addBodyURL = './assets/images/addBody.png';
    const addLeftArmURL = './assets/images/addLeftArm.png';
    const addLeftLegURL = './assets/images/addLeftLeg.png';
    const addRightArmURL = './assets/images/addRightLeg.png';
    const addRightLegURL = './assets/images/addRightLeg.png';

    //create new image element
    const hangManImage = document.createElement('img');

    //Set attributes of image
    hangManImage.src = noneURL;
    hangManImage.alt = 'head'
    hangManImage.style.width = '200px';
    hangManImage.style.height = 'auto';
    hangManImage.id = 'hangManImage'; 

    //append to div
    imageContainer.appendChild(hangManImage);
}

function hideLetterContainer(){
    const letterContainer = document.getElementById('letterContainer');

    if(letterContainer) {
        letterContainer.style.display = 'none';
    } else {
        console.log('not working');
    }
};
function showLetterContainer() {
    const letterContainer = document.getElementById('letterContainer');

    if(letterContainer) {
        letterContainer.style.display = "inline-block"
    } else {
        console.log('not working');
    }
}
hideLetterContainer();

function wordSelect() {
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    const selectedWord = wordArray[randomIndex];
    console.log('Selected entry:', selectedWord);
};

function displayWord() {
    wordSelect()
    const wordContainer = document.getElementById('wordContainer');
    
    const randomWordSelected = document.createElement('h2');

    randomWordSelected.id = 'gameplayWord';

    wordContainer.appendChild(randomWordSelected);
    console.log

};
startButton.addEventListener('click', function() {
    console.log('start button was pressed')
    startButton.style.display = 'none';
    addHangManImage(); 
    displayWord()

    let letterContainer = document.getElementById('letterContainer')

    showLetterContainer()
    //loop trough word array
    wordArray.forEach((item, index) => {
    console.log(`Index ${index}: ${item}`);
    });

});


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





