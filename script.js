let img1 = document.getElementById("image-1");
let img2 = document.getElementById("image-2");
let img3 = document.getElementById("image-3");
let img4 = document.getElementById("image-4");
let img5 = document.getElementById("image-5");
let img6 = document.getElementById("image-6");
let img7 = document.getElementById("image-7");
let img8 = document.getElementById("image-8");

let imagen = document.getElementById("imagenn");

let msg = document.getElementById("img-big");

function salir()
{
    msg.style.display = "none";
}

img1.addEventListener("click", () => {
    msg.style.display = "flex";
    imagen.innerHTML = `<img src="assets/logo.jpeg" alt=""  class="img-global">`;
});

img2.addEventListener("click", () => {
    msg.style.display = "flex";
    imagen.innerHTML = `<img src="assets/img1.jpeg" alt="" class="img-global-5">`;
});

img3.addEventListener("click", () => {
    msg.style.display = "flex";
    imagen.innerHTML = `<img src="assets/img3.jpg" alt="" class="img-global-2">`;
});

img4.addEventListener("click", () => {
    msg.style.display = "flex";
    imagen.innerHTML = `<img src="assets/img2.jpg" alt="" class="img-global-2">`;
});


img5.addEventListener("click", () => {
    msg.style.display = "flex";
    imagen.innerHTML = `<img src="assets/img4.jpg" alt="" class="img-global-3">`;
});

img6.addEventListener("click", () => {
    msg.style.display = "flex";
    imagen.innerHTML = `<img src="assets/img5.jpg" alt="" class="img-global-4">`;
});

img7.addEventListener("click", () => {
    msg.style.display = "flex";
    imagen.innerHTML = `<img src="assets/img6.jpg" alt="" class="img-global-4">`;
});

img8.addEventListener("click", () => {
    msg.style.display = "flex";
    imagen.innerHTML = `<img src="assets/img7.png" alt="" class="img-global-5">`;
});