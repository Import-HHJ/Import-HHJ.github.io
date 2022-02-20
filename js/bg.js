const images = [
  "a.jpg",
  "b.jpeg",
  "c.jpeg",
  "d.jpeg",
  "e.jpeg",
  "f.jpeg",
  "g.jpg",
  "h.jpg",
  "i.jpg",
  "j.jpg",
  "k.jpg",
  "l.jpg",
];

const choseImage = images[Math.floor(Math.random() * images.length)];
console.log(choseImage);

document.body.style.backgroundImage = `url('img/${choseImage}')`;
