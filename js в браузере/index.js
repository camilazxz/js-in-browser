const   readmore = document.getElementById('readmore');
const hiddenImages = document.querySelectorAll('.brands img:nth-last-child(-n+6)');
readmore.addEventListener('click', () => {
    if (readmore.textContent === "Показать все") {
        hiddenImages.forEach(img => {
            img.style.display = 'block';
        });
        img.src = '/ic-expand2.svg';
            readmore.textContent = "Скрыть";
    } else {
        hiddenImages.forEach(img => {
            img.style.display = 'flex';
        });
        readmore.textContent = "Скрыть";
    }
});