const cube = document.getElementById("cube");
let x = 0;
let y = 0;

cube.addEventListener("mousedown", function (event) {
  const x0 = event.clientX;
  const y0 = event.clientY;
  document.addEventListener("mousemove", move);
  document.addEventListener("mouseup", function () {
    document.removeEventListener("mousemove", move);
  });
  
  function move(event) {
    const x1 = event.clientX;
    const y1 = event.clientY;
    x += (y1 - y0) / 50;
    y += (x1 - x0) / 50;
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
  }
});

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowUp":
      x -= 90;
      break;
    case "ArrowDown":
      x += 90;
      break;
    case "ArrowLeft":
      y -= 90;
      break;
    case "ArrowRight":
      y += 90;
      break;
  }
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
});

