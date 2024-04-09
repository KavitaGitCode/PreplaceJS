let getLabelText = document.querySelectorAll('label');
let formControl = document.querySelectorAll('.form-control');

formControl.forEach((item) => {
    let label = item.querySelector('label');
    label.innerHTML = label.innerText.split('').map((letter, index) => {
        return `<span style="transition-delay:${index * 80}ms">${letter}</span>`;
    }).join('');
});