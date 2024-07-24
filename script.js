const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value) {
      const nextInput = inputs[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (e.target.value === '') {
        const prevInput = inputs[index - 1];
        if (prevInput) {
          prevInput.focus();
        }
      }
    }
  });
});

// Set focus to the first input on page load
window.addEventListener('load', () => {
  inputs[0].focus();
});
