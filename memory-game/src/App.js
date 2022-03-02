import './App.css';
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
}))

function App() {
  const classes = useStyles();

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[getRandomInt(16)];
    }
    return color;
  }

  function getTwoDifferentNumbers(max){
    let firstNumber = getRandomInt(max);
    let secondNumber = 0;
    do {secondNumber = getRandomInt(max)
    } while(secondNumber == firstNumber);
    return [firstNumber, secondNumber]
  }

  let ammountOfSquares = 16;
  let ammountOfColors = ammountOfSquares/2;
  let ammountOfMoves = ammountOfSquares/2;
  let revealed = false;
  let squareSize = "21%";
  let unrevealedSquareColor = "gray";

  function colorSquares(numberOfSquares){
    let squaresToReturn = {}
    for(let i=0;i<numberOfSquares;i++){
      let randomColor = getRandomColor()
      twoNumbers
      squaresToReturn.push({})
    }
    return squaresToReturn
  }

  let coloredSquares = colorSquares();
  
  function createCards(){
    return(
      <Grid container className={classes.squareContainer}>
        {Array.from(Array(ammountOfSquares)).map((_, index) => (
            <Grid key={index} id={index} className={classes.singleSquare} style={{width: squareSize, height: squareSize, background: unrevealedSquareColor, }}>
            </Grid>
          ))}
      </Grid>
    )
  }

  function revealSquare(){

  }

  document.addEventListener('mousedown', function (event) {
  })

    return (
      <div className="App">
        <div className="gameContainer">
          {createCards()}
        </div>
      </div>
    );
}
export default App;
