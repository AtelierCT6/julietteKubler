let container = document.querySelector(".banner")
let imgBox = document.querySelector(".img_box");
// let left_btn = document.querySelector(".left_btn");
// let right_btn = document.querySelector(".right_btn");

let index = 0;
let timer;

timer = setInterval(run, 1500);

function run(){
    if (index >= 4) {
        index = 4;
        imgBox.style.transition = 'all linear 1.5s';
        imgBox.style.left = -index * 300 + 'px';
        setTimeout(()=> {
            index = 0;
            imgBox.style.transition = 'none';
            imgBox.style.left = -index * 300 + 'px';
        }, 1500)
    } else {
        index++;
        imgBox.style.transition = 'all linear 1.5s';
        imgBox.style.left = -index * 300 + 'px';
    }
}

container.onmouseover = function() {
    clearInterval(timer);
}
container.onmouseout = function() {
    timer = setInterval(run, 1500); 
}

// right_btn.addEventListener('click', () => {
//     if (index >= 3) {
//         index = 4;
//         imgBox.style.transition = 'all linear 1.5s';
//         imgBox.style.left = -index * 300 + 'px';
//         setTimeout(()=> {
//             index = 0;
//             imgBox.style.transition = 'none';
//             imgBox.style.left = -index * 300 + 'px';
//         }, 1500)
//     } else {
//         index++;
//         imgBox.style.transition = 'all linear 1.5s';
//         imgBox.style.left = -index * 300 + 'px';
//     }
// });

// left_btn.addEventListener('click', ()=>{
//     if (index <= 0) {
//         index = 0;
//         imgBox.style.transition = 'all linear 1.5s';
//         imgBox.style.left = 300 + 'px';     
//         setTimeout(function() {
//             index = 3;
//             imgBox.style.transition = 'none';
//             imgBox.style.left = -index * 300 + 'px';
//         }, 1500);
//     } else {
//         index--;
//         imgBox.style.transition = 'all linear 1.5s';
//         imgBox.style.left = -index * 300 + 'px';
//     }
// });