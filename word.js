words = ['hello', 'bye', 'java']
const rows = 15;
const cols = 15;

const gameboard = [];
for (let i = 0; i < rows; i++) {
  const row = [];
  for (let j = 0; j < cols; j++) {
    row.push("");
  }
  gameboard.push(row);
} 




window.onload= function() {
    //placewords
    //drawBoard
    
    
    const tds = document.querySelectorAll("td")
    tds.forEach(el => {
        if(el.textContent == ''){
            el.textContent = 'X'
            }else{
                el.className = 'word'
            }
        });

    }
    function placeWords(){
        //iterate over list of words and select random starting locations/directions
        //check if those locations are valid with canPlaceWord
        //if can be placed call placeword else find new starting cordanates
        
        //after everything is placed fillremaining empty strings in 2d array with random letters
    }
    function placeWord(theWord,startingX, StartingY, direction){
        //todo stub
        //place words into 2d array
        console.log("placing: " + theWord)
    }
    function canPlaceWord(theWord, startingX, StartingY, direction){
        //check if there are no conflicts
    }
    function drawBoard(){
        //take characters from 2d array and put them in the html 
        }


//todo add way to take input from user and check their guesses

