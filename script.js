const marioDiv = document.getElementById('mario');
const imgMario = marioDiv.querySelector('img');

imgMario.src = './assets/mario-stand.gif';
imgMario.alt = 'Mario is standing';
imgMario.style.position = 'absolute';
imgMario.style.left = '200px';
imgMario.style.top = '200px';
imgMario.style.width = '300px';
imgMario.style.height = 'auto';


function stopMario() {
    imgMario.src = './assets/mario-stand.gif';
    
}


function moveMario(event) {
    if (imgMario.src.endsWith('mario-stand.gif')) {
        imgMario.src = './assets/mario-walk.gif';
        imgMario.alt = 'Mario is walking';
    }

    const key = event.key;
    const currentLeft = parseInt(getComputedStyle(marioDiv).left, 10) || 0;
    const currentBottom = parseInt(getComputedStyle(marioDiv).bottom, 10) || 0;

    if (key === "ArrowLeft") {
        imgMario.style.transform = "scaleX(-1)"; 
        marioDiv.style.left = `${currentLeft - 10}px`; 
    }

    if (key === "ArrowRight") {
        imgMario.style.transform = "scaleX(1)";
        marioDiv.style.left = `${currentLeft + 10}px`;
    }

    if (key === "ArrowUp") {
        
        if (currentBottom === 0) { 
            marioDiv.style.bottom = `${currentBottom + 150}px`; 
            setTimeout(() => {
                marioDiv.style.bottom = '0px'; 
            }, 500); 
        }
    }
}


document.addEventListener('keydown', function (e) {
    moveMario(e);
});


document.addEventListener('keyup', function () {
    stopMario();
});


let isMoving = false;
document.addEventListener('keydown', function (e) {
    if (!isMoving) {
        isMoving = true;
        moveMario(e);
    }
});

document.addEventListener('keyup', function () {
    isMoving = false;
    stopMario();
});


function moveMarioWithClick(event) {
    const mouseX = event.clientX;
    const marioX = marioDiv.offsetLeft + marioDiv.offsetWidth / 2; 

    if (mouseX > marioX) {
      
        imgMario.style.transform = "scaleX(1)"; 
        imgMario.src = './assets/mario-walk.gif'; 
    } else if (mouseX < marioX) {
     
        imgMario.style.transform = "scaleX(-1)"; 
        imgMario.src = './assets/mario-walk.gif'; 
    }

    setTimeout(() => {
        stopMario();
    }, 1000);
}

document.addEventListener('click', moveMarioWithClick);



function stopMarioAfterClick() {
    setTimeout(stopMario, 1000); 
}


document.addEventListener('click', function (event) {
    moveMarioWithClick(event);
    stopMarioAfterClick(); // 
});
