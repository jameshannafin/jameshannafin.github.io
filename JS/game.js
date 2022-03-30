//THis var keeps track of whos turn it is//
let activePlayer = 'X';
//This array stores an array of moves, we use this to determine win conditions.//
let selectedSquares = [];

//This function is for placing an x or on in a space//
function placeXOrO(squareNumber){
    // This condition ensures a swuare hasnt been selected already
    //the ,some() nethod is used to check each element of selectedSquare  array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))){
        //This var retrieves the html element id that was clicked
        let select = document.getElementById(squareNumber);
        //This checks whos turn it is
        if (activePlayer === "X") {
            //if active player is equal to x the x .png is placed in html
            select.style.backgroundImage = 'url("images/x.png")';
            //active player may only be O if it is not X
        }
        else{
             //if active player is equal to o the o .png is placed in html
             select.style.backgroundImage = 'url("images/o.png")';
        }

        //squareNumber and active player are concatenated togehter and added to the array.
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win conditons
        checkWinConditions();
        //This condition is for changing the active player 
        if (activePlayer ==="X"){
            //if active player is x, change it to o
            activePlayer = "O";
        }
        else{
            activePlayer = 'X';
        }

        //this function plays placement sound.
        audio("./Media/place.mp3");
        //This condition checks to see if it is the computer turn.
        if (activePlayer === 'O'){
            //THis function disables clicking for computer choice
            disableClick();
            //This function waits 1 second before computer places image and enables click
            setTimeout(function(){computersTurn(); }, 1000)
        }

        //Returning true is needed for our computerTurn() to work
        return true;
    }

    //This function results in a random square being selected
    function computersTurn(){
        //THis boolean is needed for our while loop
        let success = false;
        //this var stores a random number 0-8
        let pickASquare;
        //This conditions allows our while loop to keep tring if a square is selected already.
        while (!success) {
            //a random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number evaluated returns true, the square hasnt been selected yet.
            if (placeXOrO(pickASquare)){
                //this line calls a function
                placeXOrO(pickASquare);
                //this changes our boolean and ends the loop
                success = true;
            };
            
        }
    }
}

//This function pares the selectedSquares array to seatch for win conditions
//drawLine function is called to draw a line if the conditions are met
function checkWinConditions(){

    //X 0, 1, 2 condition.
    if      (arrayIncludes("0X","1X","2X")) {drawWinLine(120,50,900,50)}
    //X 3,4,5, condition.
    else if (arrayIncludes("3X","4X","5X")) {drawWinLine(50,304,558,304)}
    //X 6,7,8 condition.
    else if (arrayIncludes("6X","7X","8X")) {drawWinLine(50,508,558,508)}
    //X 0, 3,6 condition.
    else if (arrayIncludes("0X","3X","6X")) {drawWinLine(140,50,140,558)}
    //X 1,4,7 condition.
    else if (arrayIncludes("1X","4X","7X")) {drawWinLine(304,50,304,558)}
    //X 2,5,8 condition.
    else if (arrayIncludes("2X","5X","8X")) {drawWinLine(508,50,508,558)}
    //X 6,4,2,co ndition.
    else if (arrayIncludes("6X","4X","2X")) {drawWinLine(100,508,510,90)}
    //X 0,4,8, condition.
    else if (arrayIncludes("0X","4X","8X")) {drawWinLine(100,100,520,520)}
    //o 0,1,2, condition.
    else if (arrayIncludes("0O","1O","2O")) {drawWinLine(50,100,558,100)}
    //o 3,4,5 condition.
    else if (arrayIncludes("3O","4O","5O")) {drawWinLine(50,305,558,304)}
    //O 6,7,8 condition.
    else if (arrayIncludes("6O","7O","8O")) {drawWinLine(50,508,558,508)}
    //O 0,3,6 condition.
    else if (arrayIncludes("0O","3O","6O")) {drawWinLine(100,50,100,558)}
    //O 1,4,7 condition.
    else if (arrayIncludes("1O","4O","7O")) {drawWinLine(304,50,304,558)}
    //O 2,5,8 condition.
    else if (arrayIncludes("2O","5O","8O")) {drawWinLine(508,50,508,558)}
    //O 6,4,2, condition.
    else if (arrayIncludes("6O","4O","2O")) {drawWinLine(100,508,510,90)}
    //O 0,4,7 condition.
    else if (arrayIncludes("0O","4O","8O")) {drawWinLine(70,50,620,620)}
    //This condition checks for a tie. If none of the above conditions register and 9 squares are slected the code executes
    else if (selectedSquares.length >=9){
        //Play tie sound
        audio("./Media/tie.mp3");
        //THis function sets a .3 second timer before the reset game us called.
        setTimeout(function() {resetGame();}, 1200)
    }


    //This function checks if an array include 3 strings. It is used to check for each win condition.
function arrayIncludes(squareA,squareB,squareC){
    //These 3 vars will be used to check for 3 in a row.
    const a = selectedSquares.includes(squareA)
    const b = selectedSquares.includes(squareB)
    const c = selectedSquares.includes(squareC)
    //If the 3 vars we pass are all included in our arrat true is returned and our else if condition executes the drawWinLine()
    if (a === true && b === true && c === true) {return true}
}

}

//This Function makes our body element temporarily unclickable
function disableClick(){
    //This makes our body unclickable.
    game.style.pointerEvents = 'none'
    //this makes our body clickable again after 1 second
    setTimeout(function() {game.style.pointerEvents = 'auto'}, 1000);
}

//This function takes a string paremeter of the path you set earlier for placement sound
function audio(audioURL){
    //we creane a new audio object and we pass the path as a paremeter
    let audio = new Audio(audioURL);
    //Play method plays our audio sound
    audio.play()
}

//This function utilizes html canvas to draw win lines
function drawWinLine(coordX1,coordY1,coordX2,coordY2){
    //this line accesses our html canvas element
    const canvas = document.getElementById("win-lines")
    //this line gives us acces to methods and properties to use on canvas
    const c = canvas.getContext('2d');
    //this line indicates where the start of lines x axis is
    let x1 = coordX1,
        // this line indicates where the start of lines y acis is
        y1 = coordY1,
        //this line indicates where the end of a lines x axis is
        x2 = coordX2,
       // this line indicattes where the end of a lines x axis is 
       y2 = coordY2,
       //This var stores temporary x axis data we update in our animation loop
       x = x1,
       // this var stores temporary y axis data we update in our animation loop
       y = y1;


       //This function interacts with the canvs
       function animateLineDrawing(){
           //This var greates a loop
           const animationLoop = requestAnimationFrame(animateLineDrawing);
           //This method clears content from last loop itereration 
           c.clearRect(0,0,608,608)
           //this method starts a new path
           c.beginPath();
           //this method moces us to a starting point for the line
           c.moveTo(x1,y1)
           //this method indicatesthe end point of our line
           c.lineTo(x,y)
           //this method sets the width of our line
           c.lineWidth = 10;
           // This method sets the color of the line 
           c.strokeStyle = "rgba(70 ,255,33,.8)";
           //tHis metho draws evertything we layed out above.
           c.stroke();
           //This condition checks if weve reached the endpoint
           if (x1 <= x2 && y1 <= y2){
               //this condition adds 10 to the previous end x point
               if (x < x2) { x += 10;}
               //this condition adds 10 to the previous end y point
               if ( y < y2) {y += 10;}
               //this condition cancels oir animation loop if weve reached the endpoint
               if ( x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop)}
           }
           //This condition is simliar to the one abve and is necasary for the 6,4,2 win condition
           if (x1 <= x2 && y1 >= y2){
            if (x < x2) { x += 10;}
            if ( y > y2) {y -= 10;}
            if ( x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop)}

           }
       }

       //This function clears our canvas after our win line is drawn.
       function clear(){
           //This line starts our animation loop
           const animationLoop = requestAnimationFrame(clear);
           //this line clears our cavas
           c.clearRect(0,0,608,608);
           //this line stops our animation loop 
           cancelAnimationFrame(animationLoop);
       }

    //This line disallows clicking while the win sound is playing
    disableClick();
    //this line plays the win sounds
    audio('./Media/wingame.mp3');
    //This line calls our animation loop
    animateLineDrawing();
    //This line waits 1 seconds then clears the canvas and resets the game 
    setTimeout(function() {clear();resetGame();},1000)


}

//This function resets the game in the event of a tie or win
function resetGame(){
    //this loop interates through each HTML square elemet
    for (let i = 0; i< 9; i++){
        //this var gets the html element of i
        let square = document.getElementById(String(i))
        //this removes our elements backgroundImage
        square.style.backgroundImage = ""
    }

//THis resets our arrat so it is empty and we can start over 
    selectedSquares = [];
}