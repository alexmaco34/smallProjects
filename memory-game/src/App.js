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
  
  let ammountOfSquares = 16;
  let ammountOfColors = ammountOfSquares/2;
  let ammountOfMoves = ammountOfSquares/2;
  let revealed = false;
  let squareSize = "21%";
  let unrevealedSquareColor = "gray";
  let revealedColor = unrevealedSquareColor;
  let squaresArray = Array(ammountOfSquares);
  let coloredSquares = {};


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
    while (currentIndex != 0) {
  
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

  squaresArray = enumerateArray(squaresArray)
  squaresArray = shuffle(squaresArray)

  function createColoredSquares(numberOfSquares, array){
    let squaresToReturn = [{}];
    for(let i=0;i<numberOfSquares-1;i++){
      let randomColor = getRandomColor()
      squaresToReturn.push({[randomColor]:array[i]});
    }
    return squaresToReturn
  }

  coloredSquares = createColoredSquares(ammountOfSquares, squaresArray)
  console.log(coloredSquares)

  function createCards(){
    return(
      <Grid container className={classes.squareContainer}>
        {Array.from(Array(ammountOfSquares)).map((_, index) => (
            <Grid key={index} id={index} className={classes.singleSquare} style={{width: squareSize, height: squareSize, background: revealedColor, }}>
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
