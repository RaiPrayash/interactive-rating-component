
const mainContainer = document.querySelector(".submit-section");
const thanksContainer = document.querySelector(".thankYou-section");
const submitButton = document.getElementById("subBtn");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");


submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
})

rateAgain.addEventListener("click", () => {
    thanksContainer.classList.add("hidden");
    mainContainer.style.display = "block";
})

// rates.forEach((rate) => {
//     rate.addEventListener("click", () => {
//         console.log(rate.innerHTML)
//         rating.innerHTML = rate.innerHTML
//     })
// })

rates.forEach(function fall(rate) {
    rate.addEventListener("click", trigger);
    function trigger() {
        console.log(rate.innerHTML);
        rating.innerHTML = rate.innerHTML
    }
})


