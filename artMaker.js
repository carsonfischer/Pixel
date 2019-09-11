window.onload = function() {
    let container = document.querySelector("#canvas");
    container.style.backgroundColor = 'grey';
    container.style.display = 'grid';

    for(let i=0; i < 400; i++) {
        let box = document.createElement('span');
        box.style.border = '1px solid black'; 
        box.style.backgroundColor = 'white';
        box.style.height = '8px';
        box.style.width = '8px';

        container.appendChild(box);
    }
    document.body.appendChild(container);
  }