const ul = document.querySelector('ul.box')

for (let i = 1; i <= 100; i++){

    let boxe
    if (i % 15 == 0){
        boxe = `<li class="boxes red">fizzbuzz</li>`;
    } else if (i % 3 == 0){
        boxe = `<li class="boxes green">fizz</li>`;
    } else if ( i % 5 == 0){
        boxe = `<li class="boxes yellow">buzz</li>`;
    }  else {
        boxe = `<li class="boxes">${i}</li>`;
    }
    
    ul.innerHTML += boxe
}