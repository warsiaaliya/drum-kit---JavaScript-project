

// for mouse click .............

for( i=0; i< document.querySelectorAll('.drum').length; i++){
   

document.querySelectorAll('.drum')[i].addEventListener("click",function(){

    var drums = this.innerHTML;

    makeSound(drums)
    buttonAnimation(drums)
})
}

// for keypress ..................

document.addEventListener("keypress",function(event) {
    makeSound(event.key)
    buttonAnimation(event.key)
})



    function makeSound(key){

    switch (key) {
        case 'w':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();

        case 'a':
            var kick = new Audio('sounds/kick.mp3');
            kick.play();

        case 's':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
    
        case 'd':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();

        case 'j':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();

        case 'k':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
    
        case 'l':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            
            break;
    
        default: console.log('unidentified')
            break;
    }
    }

    function buttonAnimation(currentKey){

        // document.querySelector('.a').classList.add('pressed')

       var activeKey = document.querySelector("."+currentKey);
       activeKey.classList.add("pressed");

       setTimeout( function(){
        activeKey.classList.remove("pressed")},200
       );
    }







// var i=0;
// while (i<7){

//     function monn(){
//         alert('hi there');
//     }
    

// document.querySelectorAll('.drum')[i].addEventListener("click",monn)
// }
// i++;

