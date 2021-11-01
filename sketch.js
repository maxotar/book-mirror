"use strict";

const titles = [
  "crime_and_punishment",
  "pride_and_prejudice",
  "persuasion",
  "the_great_gatsby",
  "a_portrait_of_the_artist_as_a_young_man",
  "dune",
  "the_old_man_and_the_sea",
  "the_brothers_karamazov",
  "the_trial",
  "1984",
  "dubliners",
  "to_kill_a_mockingbird",
  "animal_farm",
  "slaughterhouse-five",
  "foundation",
  "a_gentleman_in_moscow",
];

let books;

function preload() {
  books = titles.map((book) => {
    return {
      title: book,
      img: loadImage(`assets/${book}.jpg`),
    };
  });
}

function setup() {
  createCanvas(1080, 1080);
  noLoop();
  imageMode(CENTER);
}

function draw() {
  books.forEach((book) => {
    render(book.img);
    saveCanvas(book.title);
  });
}

function render(img) {
  const w2h = img.width / img.height;
  const wDraw = height * w2h;
  image(img, width / 2, height / 2, wDraw, height);

  push();
  scale(-1, 1);
  image(img, wDraw - width / 2, height / 2, wDraw, height);
  image(img, -wDraw - width / 2, height / 2, wDraw, height);
  pop();
}
