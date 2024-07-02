let menuBtn = document.getElementById('menu-btn');
let closeBtn = document.getElementById('close-btn');
let menuBar = document.getElementById('menu-bar');

menuBtn.addEventListener('click',function(){
    if(menuBar.classList.contains('hidden')){
        menuBar.classList.remove('hidden');
        menuBar.classList.add('flex');
    }
})

closeBtnBtn.addEventListener('click',function(){
    if(menuBar.classList.contains('hidden')){
        menuBar.classList.add('flex')
    }else{
        menuBar.classList.add('hidden');
    }
})