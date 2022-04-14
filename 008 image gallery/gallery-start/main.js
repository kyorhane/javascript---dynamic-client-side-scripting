const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgFiles = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Looping through images */
for (const img of imgFiles) {
    console.log(img);
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `./images/${img}`);
    thumbBar.appendChild(newImage);
}

thumbBar.addEventListener('click', (event) => {
    const triggerImg = event.target.attributes.src.value;
    displayedImage.attributes.src.value = triggerImg;
})

/* Wiring up the Darken/Lighten button */
// btn.addEventListener('click', () => {
//     btn.textContent = (btn.textContent === 'Darken') ? btn.textContent = 'Lighten' : btn.textContent = 'Darken';
//     overlay.style.backgroundColor = (btn.textContent === 'Lighten') ? `rgba(0, 0, 0, .50)` : '';
// })

btn.addEventListener('click', () => {
    const btnState = btn.getAttribute('class');
    if (btnState === 'dark') {
        btn.textContent = 'Lighten';
        btn.setAttribute('class', 'light');
    } else {
        btn.textContent = 'Darken';
        btn.setAttribute('class', 'dark');
    }
    overlay.style.backgroundColor = (btnState === 'dark') ? `rgba(0, 0, 0, .50)` : '';
})