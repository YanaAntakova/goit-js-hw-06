let counterValue = 0;
const valueNum = document.getElementById('value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const onClickDecrementBtn = (event) => {
    counterValue -= 1;
    valueNum.textContent = counterValue;
};

const onClickIncrementBtn = (event) => {
    counterValue += 1;
    valueNum.textContent = counterValue;
};

decrementBtn.addEventListener('click', onClickDecrementBtn);
incrementBtn.addEventListener('click', onClickIncrementBtn);
