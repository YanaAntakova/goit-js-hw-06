const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const getInputValue = ({ currentTarget }) => {
  if (currentTarget.value !== '') {
    output.textContent = currentTarget.value;
  } else {
    output.textContent = 'Anonymous';
  }
};

textInput.addEventListener('input', getInputValue);