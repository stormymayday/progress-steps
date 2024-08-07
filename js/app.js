const progressLine = document.getElementById("progress-line");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const circles = document.querySelectorAll(".circle");

let currentActiveCircle = 1;

nextBtn.addEventListener("click", () => {
    currentActiveCircle++;

    if (currentActiveCircle > circles.length) {
        currentActiveCircle = circles.length;
    }

    // console.log(currentActiveCircle);
    update();
});

prevBtn.addEventListener("click", () => {
    currentActiveCircle--;

    if (currentActiveCircle < 1) {
        currentActiveCircle = 1;
    }

    console.log(currentActiveCircle);
    update();
});

const update = () => {
    circles.forEach((circle, index) => {
        if (index < currentActiveCircle) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    const activeCircles = document.querySelectorAll(".active");

    progressLine.style.width =
        ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";
};
