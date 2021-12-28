/// selectors
const output = document.querySelector('.input');
const btn = document.querySelector('.btn');
///the value that you hide
const hide = document.querySelector('.hide');
const message = document.querySelector('.message');


btn.addEventListener('click',function(e){
    e.preventDefault();
    let valueGet = output.value
    console.log(valueGet);
    // if(output.value === ''){
    //     message.classList.add('.show');
    // }
    message.textContent= valueGet;
    
})


