import './App.css';
import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  squareContainer: {
    justifyContent: "space-evenly",
    alignContent: "space-around",
    flexDirection: "column",
    position: "absolute",
    float: "left",
    marginLeft: "22%",
    marginRight: "50%",
    width: 1000,
    height: 800,
    top: "9%",
    backgroundColor: "yellow",
  },
  gameContainer: {
  },
  singleSquare: {
    height: "30%",
    width: "30%",
    backgroundColor: "gray",
  },
  buttonDiv: {
    textAlign: 'center',
  },
  button: {
    backgroundColor: "cyan",
    boxShadow: "4px 4px 9px 2px rgba(0,0,0,0.69)"
  },
}))

function App() {
  const classes = useStyles();
  const [revealed, setRevealed] = useState(false);
  const [coloredSquares, setColoredSquares] = useState({});
  const [ammountOfSquares, setAmmountOfSquares] = useState(16);
  const [ammountOfColors, setAmmountOfColors] = useState(ammountOfSquares/2);
  const [ammountOfMoves, setAmmountOfMoves] = useState(ammountOfSquares/2);
  const [squareSize, setSquareSize] = useState("21%");
  const [unrevealedSquareColor, setUnrevealedSquareColor] = useState("gray");
  const [squaresArray, setSquaresArray] = useState(Array(ammountOfSquares));
  const [twoVisibleSquares, settwoVisibleSquares] = useState(false);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function enumerateArray(array){
    for(let i=0; i<array.length; i++){
      array[i] = i
    }
    return array
  }

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = getRandomInt(currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[getRandomInt(16)];
    }
    return color;
  }

  

  function createColoredSquares(numberOfSquares, array){
    let squaresToReturn = {};
    for(let i=0;i<numberOfSquares-1;i+=2){
      let randomColor = getRandomColor()
      Object.assign(squaresToReturn, {[array[i]]:randomColor});
      Object.assign(squaresToReturn, {[array[i+1]]:randomColor});
      Object.assign("visible", false)
    }
    return squaresToReturn
  }

  function resetColors(){
    setSquaresArray(enumerateArray(squaresArray))
    setSquaresArray(shuffle(squaresArray))
    setColoredSquares(createColoredSquares(ammountOfSquares, squaresArray))
  }


  function displayColoredSquare(target){
    if (!isNaN(target.id) && target.id !== '') {
      let id = target.id
      target.style.background = coloredSquares[id]
      
    }
  }

  function createSquares(){
    return(
      <Grid container className={classes.squareContainer}>
        {Array.from(Array(ammountOfSquares)).map((_, index) => (
            <Grid key={index} id={index} className={classes.singleSquare} style={{width: squareSize, height: squareSize, background: unrevealedSquareColor, }}/>
          ))}
      </Grid>
    )
  }
  
  function checkVisibleSquares(){
    let ammountOfColoredSquares = 0
    for(let i = 0; i<ammountOfSquares; i++){
      let colorOfSquare = document.getElementById(i).style.background
      if(colorOfSquare !== "gray"){
        ammountOfColoredSquares++
      }
    }
    return ammountOfColoredSquares
  }

  function checkColorCoupple(){

  }

  document.addEventListener('click', function () {
  })

  document.addEventListener('mousedown', function (event) {
    if(checkVisibleSquares() !== 2){
      displayColoredSquare(event.target)
    }
    if(checkVisibleSquares() === 2){
      
    }
  })

    return (
      <div className="App">
        <div className={classes.buttonDiv}>
          <Button onClick={() => resetColors()} className={classes.button}>Reset Colors</Button>
        </div>
        <div className="gameContainer">
          {createSquares()}
        </div>
      </div>
    );
}
export default App;
