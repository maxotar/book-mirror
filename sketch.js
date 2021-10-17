"use strict";

let p5Canvas;

const images = [];
const fps = 30;
const framesForward = fps * 2;
const framesLimit = framesForward * 2;
const shouldRecord = false;

const capturer = new CCapture({
  framerate: fps,
  format: "png",
  name: "pngs",
  quality: 100,
});

function preload() {
  images.push(loadImage("./assets/cap2.jpg"));
  images.push(loadImage("./assets/cap3.jpg"));
  images.push(loadImage("./assets/cap4.jpg"));
  images.push(loadImage("./assets/cap5.jpg"));
  images.push(loadImage("./assets/cap7.jpg"));
}

function setup() {
  p5Canvas = createCanvas(1080, 1920);
  frameRate(fps);
}

function draw() {
  if (shouldRecord && frameCount === 1) {
    capturer.start();
  }

  if (frameCount > framesLimit) {
    if (shouldRecord) {
      capturer.stop();
      capturer.save();
    }
    noLoop();
    return;
  }

  render();

  if (shouldRecord) {
    capturer.capture(p5Canvas.canvas);
  }
}

function render() {
  const dWidth = width / images.length;

  images.forEach((img, i) => {
    const sWidth = (dWidth / height) * img.height;
    const sWidthStep = (img.width - sWidth) / framesForward;
    const sx =
      frameCount <= framesForward
        ? frameCount * sWidthStep
        : (framesLimit - frameCount) * sWidthStep;
    image(img, i * dWidth, 0, dWidth, height, sx, 0, sWidth, 0);
  });
}
