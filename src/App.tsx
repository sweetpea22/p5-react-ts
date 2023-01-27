import React from 'react';
import './App.css';
import Sketch from 'react-p5';
import p5Types from 'p5';

// function App() {
//   const setup = (p5: p5Types, canvasParentRef: Element) => {
//     p5.createCanvas(500, 500).parent(canvasParentRef);
//   };
//   const draw = (p5: p5Types) => {
//     p5.background(0);
//     p5.ellipse(x, y, 70, 70);
//     p5.fill(255, x * 1.3, 0);
//     if (x > p5.width) direction = '';
//     if (x < 0) {
//       direction = '^';
//     }
//     if (direction === '^') x += 8;
//     else x -= 4;
//   };

//   return <Sketch setup={setup} draw={draw} />;
// }

class App extends React.Component {
  x = 50;
  y = 0;
  direction = '^';

  setup = (p5: p5Types, parentRef: Element) => {
    p5.createCanvas(200, 200).parent(parentRef);
  };

  draw = (p5: p5Types) => {
    p5.background(0);
    p5.fill(255, this.y * 1.3, 0);
    p5.ellipse(this.x, this.y, 50);
    if (this.y > p5.height) this.direction = '';
    if (this.y < 0) {
      this.direction = '^';
    }
    if (this.direction === '^') this.y += 8;
    else this.y -= 4;
  };

  render() {
    return (
      <div className='App'>
        <h1>react-p5</h1>
        <Sketch setup={this.setup} draw={this.draw} />
      </div>
    );
  }
}

export default App;
