const buyCryproBtn = document.querySelector("#buy-crypto-btn");
const saleCryproBtn = document.querySelector("#sale-crypto-btn");
const buyBtn = document.querySelector("#buy");
const currentState = buyCryproBtn.classList.contains("active")
    ? buyCryproBtn
    : saleCryproBtn;

buyCryproBtn.addEventListener("click", () => {
    toggleBuySale(saleCryproBtn, buyCryproBtn);
    buyBtn.textContent = "Купить";
});
saleCryproBtn.addEventListener("click", () => {
    toggleBuySale(buyCryproBtn, saleCryproBtn);
    buyBtn.textContent = "Продать";
});

function toggleBuySale(currentState, newState) {
    currentState.classList.remove("active");
    newState.classList.add("active");
}
