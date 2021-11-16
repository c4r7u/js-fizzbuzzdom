// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.


const boxesContainer = document.querySelector('.list');

console.log(boxesContainer);

const newBox = ` <div class="box">box1</div> `;

boxesContainer.innerHTML = newBox;