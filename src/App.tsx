import React from 'react';
import './App.css';
import Sketch from 'react-p5';
import p5Types from 'p5';

// class App extends React.Component {
//   x = 50;
//   y = 0;
//   direction = '^';

//   setup = (p5: p5Types, parentRef: Element) => {
//     p5.createCanvas(200, 200).parent(parentRef);
//   };

//   draw = (p5: p5Types) => {
//     p5.background(0);
//     p5.fill(255, this.y * 1.3, 0);
//     p5.ellipse(this.x, this.y, 50);
//     if (this.y > p5.height) this.direction = '';
//     if (this.y < 0) {
//       this.direction = '^';
//     }
//     if (this.direction === '^') this.y += 8;
//     else this.y -= 4;
//   };

//   render() {
//     return (
//       <div className='App'>
//         <h1>react-p5</h1>
//         <Sketch setup={this.setup} draw={this.draw} />
//       </div>
//     );
//   }
// }

class App extends React.Component {
  y = 0;
  direction = '^';
  canvas: HTMLCanvasElement = document.createElement('canvas');

  ctx: CanvasRenderingContext2D = this.canvas.getContext('2d')!;

  setup = (p5: p5Types, parentRef: Element) => {
    p5.createCanvas(500, 500).parent(parentRef);
    p5.noStroke();
    p5.colorMode('hsb', 360, 100, 100, 100);
  };

  draw = (p5: any) => {
    p5.background(230, 30, 23);
    // let gradient = this.ctx.createRadialGradient(
    //   p5.mouseX - 100,
    //   p5.mouseY - 100,
    //   0,
    //   p5.mouseX + 100,
    //   p5.mouseY + 100,
    //   500
    // );
    // gradient.addColorStop(0, '#ffff08');
    // gradient.addColorStop(1, '#ffff48');
    // this.ctx.fillStyle = gradient;
    p5.noStroke();
    p5.fill(190, 100, 100);
    p5.ellipse(p5.mouseX, p5.mouseY, 300);
    p5.fill(200, 100, 100);
    p5.ellipse(p5.width / 2, p5.height / 2, 200);
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
