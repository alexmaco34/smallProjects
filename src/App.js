import './App.css';
import Select from 'react-select'
import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  gameGrid: {
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    height: 500,
    width: 800,
  },
  hover: {
    borderColor: 'Black',
  },
  colors: {
    textAlign: 'center',
    padding: 22,
    color: 'pink',
    textShadow: '2px 2px 6px white',
  },
  gameColors: {
    position: 'absolute',
    flexDirection: 'column',
    alignContent: 'space-around',
    width: 90,
    top: 30,
    height: 700,
    float: 'left',
  },
  gameContainer: {
    position: 'relative',
    float: 'right',
  },
  buttonDiv: {
    top: -310,
    position: 'relative',
    marginLeft: '100%',
    float: 'right',
    background: 'DarkGray',
    textAlign: 'center',
    margin: 15,
  },
  button: {
    textShadow: '2px 2px 5px',
  },
  square: {
    width: 10,
    height: 10,
    border: '1px solid #eee'
  },
  select: {
    width: '15%',
    float: 'right',
    display: 'flex',
    padding: 15,
  },
}))

//Can add to colors any valid color name and it will be displayed on the app
const colors = ['blue', 'green', 'black', 'purple', 'cyan', 'grey', 'white', 'yellow', 'red']

const initialSquareSize = '10px';
const initialNumberOfSquares = 3036;
const options = [
  { value: 3036, label: 10 },
  { value: 1551, label: 15 },
  { value: 900, label: 20 },
  { value: 580, label: 25 },
  { value: 425, label: 30 },
]

function App() {

  const classes = useStyles();

  const [color, setColor] = useState('cyan');
  const [squareSize, setSquareSize] = useState(initialSquareSize);
  const [numberOfSquares, setNumberOfSquares] = useState(initialNumberOfSquares);
  const [selectedColor, setSelectedColor] = useState('white');

  let mouseDown = false;
  
  //Grid where the drawing happens
  function createGrid() {
    return (
      <Grid container placeholder='Select square size' className={classes.gameContainer}>
        {Array.from(Array(numberOfSquares)).map((_, index) => (
          <Grid key={index}>
            <div className={classes.square} style={{width: squareSize, height: squareSize, background: color, }} id={index + '' + index}></div>
          </Grid>
        ))}
      </Grid>
    )
  }

  //Simply resets the grid by giving the default color to every square and changing the selected color to white
  function resetGrid() {
    for (let i = 0; i < numberOfSquares; i++) {
      document.getElementById(i + '' + i).style.background = color
    }
    setSelectedColor('white')
  }

  //Only squares from the canvas have an id. Changes the background of a square when clicked.
  //If the target is one of the colors that can be chosen, it changes the selectedColor to that
  function colorHandeler(target) {
    if (!isNaN(target.id) && target.id !== '') {
      target.style.background = selectedColor;
    }
    if (isNaN(target.id)) {
      setSelectedColor(target.textContent)
    }
  }

  //Changes the size and ammount of squares in the canvas thanks to <Select> (Ammount of squares is based off of the square size)
  let handleSelectChange = selectedOption => {
    setSquareSize(selectedOption.label+'px')
    setNumberOfSquares(selectedOption.value)
    resetGrid();
  }

  document.addEventListener('mousedown', function (event) {
    colorHandeler(event.target)
    mouseDown = true;
  })
  document.addEventListener('mouseup', function (event) {
    mouseDown = false;
  })

  document.addEventListener('mouseover', function (eventOver) {
    if(mouseDown){
      colorHandeler(eventOver.target)   
    }
  })

  return (
    <div className={classes.app}>
      <div className={classes.select}>
        <Select placeholder={'Select size of squares'} options={options} onChange={handleSelectChange} />
      </div>
      <Grid container className={classes.gameColors}>
        {colors.map((_, index) => (
          <Grid item key={index} style={{ background: _}} className={classes.colors} id={_}>
            <div style={{ background: _ }} id={_}>{_}</div>
          </Grid>
        ))}
      </Grid>
      <div className={classes.gameGrid}>
        {createGrid()}
      </div>
      <div className={classes.buttonDiv}>
        <Button onClick={() => resetGrid()} className={classes.button}>RESET</Button>
      </div>
    </div>
  );
}

export default App;
