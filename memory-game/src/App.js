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
    backgroundColor: "cyan",
  },
}))

function App() {
  const classes = useStyles();

  let ammountOfSquares = 9;

  function createCards(){
    return(
      <Grid container className={classes.squareContainer}>
        {Array.from(Array(ammountOfSquares)).map((_, index) => (
            <Grid key={index} className={classes.singleSquare}>
              <div id={index}></div>
            </Grid>
          ))}
      </Grid>
    )
  }

    return (
      <div className="App">
        <div className="gameContainer">
          {createCards()}
        </div>
      </div>
    );
}
export default App;
