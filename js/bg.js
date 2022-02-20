const images = ["b.jpeg", "c.jpeg", "d.jpeg", "e.jpeg", "f.jpeg"];

const choseImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('img/${choseImage}')`;
