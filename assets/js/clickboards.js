const clipboards = document.querySelectorAll('.bi-clipboard');

clipboards.forEach((clipboard) => {
  clipboard.addEventListener('click', () => {
    // Obtener span y texto
    const span = clipboard.previousElementSibling;
    const text = span.innerText;

    // Cambiar icono a check
    clipboard.classList.replace('bi-clipboard', 'bi-clipboard-check');

    // Copiar texto después de 1 segundo
    setTimeout(() => {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          console.log('Text copied to clipboard:', text);

          // Revertir icono después de 1 seg
          setTimeout(() => {
            clipboard.classList.replace('bi-clipboard-check', 'bi-clipboard');
          }, 350);
        })
        .catch((err) => {
          console.log('Error copying text:', err);
        });
    }, 350);
  });
});
