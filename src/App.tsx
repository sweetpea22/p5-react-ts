import React from 'react';
import './App.css';
import Sketch from 'react-p5';
import p5Types from 'p5';

const App: React.FC = () => {
  
  let canvas: HTMLCanvasElement = document.createElement('canvas');

  let ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

  const setup = (p5: p5Types, parentRef: Element) => {
    p5.createCanvas(500, 500).parent(parentRef);
    p5.noStroke()
    p5.colorMode('hsb', 360, 100, 100, 100);
  }
  const draw = (p5: any) => {
    p5.background(230, 30, 23);
    let gradient = ctx.createRadialGradient(
      p5.mouseX - 100,
      p5.mouseY - 100,
      0,
      p5.mouseX + 100,
      p5.mouseY + 100,
      500
    );
    gradient.addColorStop(0, '#ffff08');
    gradient.addColorStop(1, '#ffff48');
    ctx.fillStyle = gradient;
    p5.noStroke();
    p5.fill(190, 100, 100);
    p5.ellipse(p5.mouseX, p5.mouseY, 300);
    p5.fill(200, 100, 100);
    p5.ellipse(p5.width / 2, p5.height / 2, 200);
  };

  return (
    <div className='App'>
      <h1>react-p5</h1>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}


export default App;
