const button = document.querySelector(".btn");
const input = document.querySelector(".input");
const search = document.querySelector(".search");

button.addEventListener("click", () => {
    search.classList.toggle("active");
    input.focus();
});
























const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener("click", () => {
    clickHandle();
    });

close.addEventListener("click", () => {
    clickHandleClose();
})

function clickHandle() {
    container.classList.add("show-nav");
}

function clickHandleClose() {
    container.classList.remove("show-nav");
}

//     prev.addEventListener("click", () => {
//     currentActive--;
//     if (currentActive < 1) {
//         currentActive = 1;
//     }
//     update();
//     });

//     function update() {
//     circles.forEach((circle, index) => {
//         if (index < currentActive) {
//         circle.classList.add("active");
//         } else {
//         circle.classList.remove("active");
//         }
//     });




//     const actives = document.querySelectorAll(".active");

//     progress.style.width = `${
//         ((actives.length - 1) / (circles.length - 1)) * 100
//     }%`;

//     if (currentActive === 1) {
//         prev.disabled = true;
//     } else if (currentActive === circles.length) {
//         next.disabled = true;
//     } else {
//         prev.disabled = false;
//         next.disabled = false;
//     }
// }