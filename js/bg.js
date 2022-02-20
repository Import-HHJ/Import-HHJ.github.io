const images = ["b.jpeg", "c.jpeg", "d.jpeg", "e.jpeg", "f.jpeg","g.jpeg", "h.jpeg", "i.jpeg","j.jpeg","l.jpeg"];

const choseImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('img/${choseImage}')`;
